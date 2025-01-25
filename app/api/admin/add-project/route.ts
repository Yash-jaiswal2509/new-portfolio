import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log(data);
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
