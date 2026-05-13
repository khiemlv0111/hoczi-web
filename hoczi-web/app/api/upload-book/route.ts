import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File | null;

        if (!file) {
            return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
        }

        if (file.type !== 'application/pdf') {
            return NextResponse.json({ error: 'Only PDF files are allowed.' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // sanitise filename and prefix with timestamp to avoid collisions
        const safe = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        const filename = `${Date.now()}-${safe}`;
        const dest = join(process.cwd(), 'public', 'books', filename);

        await writeFile(dest, buffer);

        return NextResponse.json({ url: `/books/${filename}` });
    } catch (err) {
        console.error('upload-book error', err);
        return NextResponse.json({ error: 'Upload failed.' }, { status: 500 });
    }
}
