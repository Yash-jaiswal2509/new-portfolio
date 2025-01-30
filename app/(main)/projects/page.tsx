import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const FrontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

export default async function Projects() {

    const getProjects = async () => {
        try {
            const response = await fetch(`${FrontendUrl}/api/projects`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: "force-cache",
                next: {
                    revalidate: 1000 * 24 * 60 * 60,
                }
            });

            const data = await response.json();
            if(data.success === false) {
                return [];
            }

            return data;
        } catch (error) {
            return [];
        }
    }

    const data = await getProjects();
    const projects: Project[] = data.data.projects;

    return (
        <div className="h-full w-full relative p-10">
            <div className="h-full w-full border border-white rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 relative p-2">
                {projects.map((project: Project) => {
                    return (
                        <Card key={project.id} className="bg-transparent text-white backdrop-blur shadow-custom-light shadow-white">
                            <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image src={project.imageUrl} alt={project.name} width={"80"} height={"80"} className="w-full h-full rounded-md border border-white" />
                            </CardContent>
                            <CardFooter className="flex flex-col items-start gap-5">
                                <div className="mx-auto">
                                    <Link href={project.githubUrl} target="_blank">
                                        <Button variant="customLink" className="text-white">
                                            Github
                                        </Button>
                                    </Link>
                                    <Link href={project.projectUrl} target="_blank">
                                        <Button variant="customLink" className="text-white ml-5">
                                            Explore
                                        </Button>
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    )
}