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

    // Ensure no duplicate fields
    const projectData = {
      name: data.name,
      description: data.description,
      projectLink: data.projectLink,
      projectGithub: data.projectGithub,
      projectImage: data.projectImage,
      projectDate: new Date(data.projectDate),
      userId: userId,
    };

    const result = await addProject({ values: projectData, userId: userId });

    if (!result.success) {
      return NextResponse.json({
        status: 400,
        message: result.error || 'Failed to add project',
      });
    }

    return NextResponse.json({
      status: 200,
      message: 'Project added successfully',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
    });
  }
}
