import { addResume } from '@/actions/add-resume';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { user, link } = data;

    if (user?.role !== 'ADMIN') {
      return NextResponse.json({
        status: 403,
        message: 'Sorry!, only admin can upload resume',
      });
    }

    if (!link) {
      return NextResponse.json({
        status: 400,
        message: 'Please enter a valid google drive link',
      });
    }

    const fileId = link.match(/\/d\/([^/]+)/)?.[1];
    console.log(fileId);
    
    if (!fileId) {
      return NextResponse.json({
        status: 400,
        message: 'Failed to extract file id from link',
      });
    }

    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const response = await addResume({ user, resume: downloadLink });

    if (!response?.success) {
      return NextResponse.json({
        status: 500,
        message: response?.message || 'Failed to upload resume',
      });
    }

    return NextResponse.json({
      status: 200,
      message: 'Resume uploaded successfully',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: 'An error occurred while uploading resume',
    });
  }
}
