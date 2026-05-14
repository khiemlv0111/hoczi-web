import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

const s3 = new S3Client({
  region: process.env.AWS_REGION ?? 'ap-southeast-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET = process.env.AWS_S3_BUCKET ?? 'tefibit-assets';
const CLOUDFRONT_URL = process.env.CLOUDFRONT_URL ?? 'https://d1y3v0ou093g3m.cloudfront.net';

export async function POST(request: NextRequest) {
  try {
    const { file_name, content_type } = await request.json();

    if (!file_name || !content_type) {
      return NextResponse.json({ error: 'file_name and content_type are required' }, { status: 400 });
    }

    const ext = file_name.split('.').pop();
    const fileKey = `books/${crypto.randomUUID()}.${ext}`;

    const command = new PutObjectCommand({
      Bucket: BUCKET,
      Key: fileKey,
      ContentType: content_type,
    });

    const upload_url = await getSignedUrl(s3, command, { expiresIn: 300 });

    return NextResponse.json({
      upload_url,
      file_key: fileKey,
      public_url: `${CLOUDFRONT_URL}/${fileKey}`,
    });
  } catch (err) {
    console.error('presign error', err);
    return NextResponse.json({ error: 'Failed to generate presigned URL' }, { status: 500 });
  }
}
