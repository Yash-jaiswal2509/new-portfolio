import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLink } from "react-icons/bs";

type ProjectData = {
    id: string;
    name: string;
    description: string;
    projectUrl: string;
    githubUrl: string;
    imageUrl: string;
}

export function ProjectCard({ project }: { project: ProjectData }) {
    return (
        <Card className="glow-card flex flex-col justify-between h-full bg-transparent text-white backdrop-blur shadow-lg border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 duration-300">
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
                    <Button variant="customLink" className="text-white hover:bg-white/10 transition-colors">
                        <BsGithub className="mr-2 h-4 w-4" />
                        Github
                    </Button>
                </Link>
                <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="customLink" className="text-white hover:bg-white/10 transition-colors">
                        <BsLink className="mr-2 h-4 w-4" />
                        Explore
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
} 