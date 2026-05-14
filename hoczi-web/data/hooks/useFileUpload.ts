import { useState, useRef } from 'react';

interface PresignedResponse {
    upload_url: string;
    file_key: string;
    public_url: string;
}

interface UploadResult {
    fileKey: string;
    publicUrl: string;
}

export function useFileUpload() {
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const xhrRef = useRef<XMLHttpRequest | null>(null);

    async function upload(file: File): Promise<UploadResult> {
        setError(null);
        setUploading(true);
        setProgress(0);

        try {
            // Bước 1: Xin presigned URL từ backend
            const presignedRes = await fetch('/api/files/presign', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    file_name: file.name,
                    content_type: file.type,
                }),
            });

            if (!presignedRes.ok) {
                throw new Error('Không lấy được presigned URL');
            }

            const { upload_url, file_key, public_url }: PresignedResponse =
                await presignedRes.json();

            // Bước 2: PUT file thẳng lên S3 với progress tracking
            await uploadToS3(upload_url, file);

            return { fileKey: file_key, publicUrl: public_url };
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Upload failed';
            setError(msg);
            throw err;
        } finally {
            setUploading(false);
            xhrRef.current = null;
        }
    }

    function uploadToS3(url: string, file: File): Promise<void> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhrRef.current = xhr;

            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    const percent = (e.loaded / e.total) * 100;
                    setProgress(percent);
                }
            });

            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    setProgress(100);
                    resolve();
                } else {
                    reject(new Error(`Upload failed: ${xhr.status}`));
                }
            });

            xhr.addEventListener('error', () => reject(new Error('Network error')));
            xhr.addEventListener('abort', () => reject(new Error('Upload bị hủy')));

            xhr.open('PUT', url);
            xhr.setRequestHeader('Content-Type', file.type);
            xhr.send(file);
        });
    }

    function cancel() {
        xhrRef.current?.abort();
    }

    return { upload, cancel, progress, uploading, error };
}