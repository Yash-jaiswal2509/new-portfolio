import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await prisma.user.findFirst({
      where: { role: 'ADMIN' },
      select: { resume: true },
    });

    console.log('Resume:', result);

    if (!result || !result.resume) {
      return NextResponse.json(
        { status: 404, message: 'No resume found' },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { status: 200, resume: result.resume },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error fetching resume:', error);
    return NextResponse.json(
      { status: 500, message: 'An error occurred while fetching resume' },
      { status: 500 },
    );
  }
}