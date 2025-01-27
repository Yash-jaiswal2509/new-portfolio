import { pinata } from '@/utils/config';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json(
        {
          status: 400,
          message: 'No file uploaded',
        },
        { status: 400 },
      );
    }

    const upload = await pinata.upload.file(file);
    const url = await pinata.gateways.convert(upload.IpfsHash);

    return NextResponse.json({
      status: 200,
      message: 'File uploaded successfully',
      fileUrl: url,
    });

  } catch (error) {
    console.error('File upload failed', error);
    return NextResponse.json(
      {
        status: 500,
        message: 'Failed to upload the file',
      },
      { status: 500 },
    );
  }
}
