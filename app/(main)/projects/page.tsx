import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLink } from "react-icons/bs";

const FrontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

async function getProjects() {
    if (!FrontendUrl) {
        console.error('NEXT_PUBLIC_FRONTEND_URL is not defined');
        return [];
    }

    const url = `${FrontendUrl}/api/projects`;
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            cache: "force-cache",
            next: {
                revalidate: 60 * 60 * 24, // 24 hours
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.status !== 200) {
            console.error('API returned success: false', data);
            return [];
        }

        const projects = data.data?.projects || [];
        return projects;

    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return [];
    }
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="bg-transparent text-white backdrop-blur shadow-lg border border-white/10 hover:border-white/20 transition-all">
            <CardHeader>
                <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full overflow-hidden rounded-md">
                    <Image
                        src={project.imageUrl}
                        alt={project.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="customLink"
                        className="text-white hover:bg-white/10 transition-colors"
                    >
                        <BsGithub className="mr-2 h-4 w-4" />
                        Github
                    </Button>
                </Link>
                <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="customLink"
                        className="text-white hover:bg-white/10 transition-colors"
                    >
                        <BsLink className="mr-2 h-4 w-4" />
                        Explore
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default async function Projects() {
    const projects = await getProjects();

    if (!projects || projects.length === 0) {
        return (
            <div className="h-full w-full flex items-center justify-center p-10">
                <Card className="bg-transparent text-white backdrop-blur p-6">
                    <CardContent>
                        <p className="text-lg text-center">No projects available at the moment.</p>
                        <p className="text-sm text-gray-400 mt-2 text-center">Please check your API configuration and data.</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="h-full w-full p-6 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {projects.map((project: Project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}