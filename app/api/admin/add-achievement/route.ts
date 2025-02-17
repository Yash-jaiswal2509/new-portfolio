import { currentRole, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { UserRole } from '@prisma/client';
import { addAchievement } from '@/actions/add-achievement';

export async function POST(req: NextRequest) {
  const role = await currentRole();
  if (role === UserRole.USER) {
    return NextResponse.json({
      status: 403,
      message: 'Sorry!!, Only admin can upload achievement',
    });
  }

  try {
    const data = await req.json();
    const user = await currentUser();
    const userId = user?.id as string;

    // Clean up the data
    const achievementData = {
      title: data.title,
      description: data.description,
      achievementImageUrl: data.achievementImageUrl,
      achievedAt: new Date(data.achievedAt),
    };

    const result = await addAchievement({ values: achievementData, userId });

    if (!result.success) {
      return NextResponse.json({
        status: 400,
        message: result.error || 'Failed to add achievement',
      });
    }

    return NextResponse.json({
      status: 200,
      message: 'Achievement added successfully',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
    });
  }
}
