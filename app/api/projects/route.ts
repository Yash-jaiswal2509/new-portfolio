import { getProjects } from '@/actions/get-projects';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const data = await getProjects();

    if (!data.success) {
      return NextResponse.json({
        status: 404,
        message: 'No projects found',
      });
    }

    return NextResponse.json({
      status: 200,
      data,
      message: 'Projects fetched successfully',
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json({
      status: 500,
      message: 'An error occurred while fetching projects',
    });
  }
}
