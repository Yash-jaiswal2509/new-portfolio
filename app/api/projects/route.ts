import { getProjects } from '@/actions/get-projects';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const data = await getProjects();

    if (!data) {
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
