import { currentRole, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { UserRole } from '@prisma/client';
import { addProject } from '@/actions/add-project';

export async function POST(req: NextRequest) {
  const role = await currentRole();
  if (role === UserRole.USER) {
    return NextResponse.json({
      status: 403,
      message: 'Sorry!!, Only admin can upload project',
    });
  }

  try {
    const data = await req.json();
    const user = await currentUser();
    const userId = user?.id as string;

    const response = await addProject({ values: data, userId });
    if (!response?.success) {
      return NextResponse.json({
        status: 500,
        message: response?.message || 'Failed to upload project',
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: 'An error occurred while uploading project',
    });
  }

  return NextResponse.json({
    status: 200,
    message: 'Project uploaded successfully',
  });
}
