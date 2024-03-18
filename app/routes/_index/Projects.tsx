import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import ProjectCard from "~/components/project-card";
import { Button } from "~/components/ui/button";

export interface Project {
    slug: string;
    title: string;
    thumbnail: string;
    description: string;
    detailedDescription: string;
    githubLink: string;
    demoLink?: string;
}

interface ProjectProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectProps) {
    return (
        <section
            className="relative flex flex-col items-center px-4"
            style={{ contain: "paint" }}
        >
            <div className="max-w-prose" id="projects">
                <h1 className="sticky top-0 z-30 w-full bg-background/85 px-3 py-6 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm">
                    FEATURED PROJECTS
                </h1>
                <ul className="group pointer-events-none mb-8 flex flex-col gap-y-12 px-3">
                    {projects.map((project) => (
                        <li key={project.title}>
                            <div>
                                <ProjectCard
                                    title={project.title}
                                    thumbnail={project.thumbnail}
                                    description={project.description}
                                    detailedDescription={
                                        project.detailedDescription
                                    }
                                    slug={project.slug}
                                    githubLink={project.githubLink}
                                    demoLink={project.demoLink}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="px-3">
                    <Button asChild className="group" variant="secondary">
                        <Link
                            to="/projects"
                            className="cursor-pointer"
                            unstable_viewTransition
                        >
                            <span>View All Projects</span>
                            <ChevronRight className="ml-2 h-4 w-4 transition duration-150 group-focus-within:translate-x-1 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
