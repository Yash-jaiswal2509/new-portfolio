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

    const response = await addAchievement({ values: data, userId });
    if (!response?.success) {
      return NextResponse.json({
        status: 500,
        message: response?.message || 'Failed to upload achievement',
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: 'An error occurred while uploading achievement',
    });
  }

  return NextResponse.json({
    status: 200,
    message: 'Achievement uploaded successfully',
  });
}
