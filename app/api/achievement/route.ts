import { NextRequest, NextResponse } from 'next/server';
import { getAchievements } from '@/actions/get-achievement';

export async function GET(req: NextRequest) {
  try {
    const data = await getAchievements();

    if (!data) {
      return NextResponse.json({
        status: 404,
        message: 'No achievements found',
      });
    }

    return NextResponse.json({
      status: 200,
      data,
      message: 'Achievements fetched successfully',
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json({
      status: 500,
      message: 'An error occurred while fetching achievements',
    });
  }
}
