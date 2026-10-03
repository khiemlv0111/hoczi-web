import crypto from 'crypto';
import { DeleteObjectCommand, GetObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { s3Client } from '../../utils/s3';
import { aiConfig } from '../../config/ai';

export const KNOWLEDGE_PREFIX = 'knowledge/';

function bucket() {
    const name = aiConfig.ingestion.bucket;
    if (!name) throw new Error('AWS_S3_BUCKET_NAME is not configured');
    return name;
}

function safeFilename(filename: string) {
    return filename.normalize('NFKD').replace(/[^\w.\-]+/g, '_').replace(/_+/g, '_').slice(-120) || 'file';
}

// Browser uploads straight to S3; the size limit is enforced by the signed policy.
export async function createKnowledgeUpload(filename: string, contentType: string) {
    const maxBytes = aiConfig.ingestion.maxUploadMb * 1024 * 1024;
    const key = `${KNOWLEDGE_PREFIX}${crypto.randomUUID()}/${safeFilename(filename)}`;
    const post = await createPresignedPost(s3Client, {
        Bucket: bucket(),
        Key: key,
        Conditions: [
            ['content-length-range', 1, maxBytes],
            ['eq', '$Content-Type', contentType],
        ],
        Fields: { 'Content-Type': contentType },
        Expires: 15 * 60,
    });
    return { url: post.url, fields: post.fields, storageKey: key, maxBytes };
}

export async function headKnowledgeObject(key: string) {
    try {
        const head = await s3Client.send(new HeadObjectCommand({ Bucket: bucket(), Key: key }));
        return { size: Number(head.ContentLength ?? 0) };
    } catch (error: any) {
        if (error?.$metadata?.httpStatusCode === 404 || error?.name === 'NotFound') return null;
        throw error;
    }
}

export async function downloadKnowledgeObject(key: string): Promise<Buffer> {
    const res = await s3Client.send(new GetObjectCommand({ Bucket: bucket(), Key: key }));
    const bytes = await res.Body!.transformToByteArray();
    return Buffer.from(bytes);
}

export async function deleteKnowledgeObject(key: string) {
    await s3Client.send(new DeleteObjectCommand({ Bucket: bucket(), Key: key }));
}
