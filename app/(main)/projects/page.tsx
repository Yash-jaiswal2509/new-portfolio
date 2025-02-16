import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/actions/get-projects";

type ProjectData = {
    id: string;
    name: string;
    description: string;
    projectUrl: string;
    githubUrl: string;
    imageUrl: string;
    createdAt: Date;
    projectDate: Date;
}

export default async function Projects() {
    const { success, projects = [], error } = await getProjects();

    if (error) {
        return (
            <div className="h-full w-full flex items-center justify-center p-10">
                <Card className="bg-transparent text-white backdrop-blur p-6">
                    <CardContent>
                        <p className="text-lg text-center">Failed to load projects</p>
                        <p className="text-sm text-gray-400 mt-2 text-center">{error}</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (!success || !projects.length) {
        return (
            <div className="h-full w-full flex items-center justify-center p-10">
                <Card className="bg-transparent text-white backdrop-blur p-6">
                    <CardContent>
                        <p className="text-lg text-center">No projects available</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const sortedProjects = [...projects].sort((a, b) =>
        new Date(b.projectDate).getTime() - new Date(a.projectDate).getTime()
    );

    return (
        <div className="h-full w-full p-6 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {sortedProjects.map((project: ProjectData) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}