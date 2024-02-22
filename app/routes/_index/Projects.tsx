import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { ArrowRight, Link as LucideLink } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

interface Project {
    slug: string;
    title: string;
    cover: string;
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
        <div className="flex flex-col items-center">
            <div className="max-w-prose" id="projects">
                <h1 className="sticky top-0 z-10 w-full bg-background/85 px-3 py-6 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm">
                    PROJECTS
                </h1>
                <ul className="flex flex-col gap-y-12 px-3">
                    {projects.map((project) => (
                        <li key={project.title}>
                            <ProjectCard
                                title={project.title}
                                cover={project.cover}
                                description={project.description}
                                detailedDescription={
                                    project.detailedDescription
                                }
                                slug={project.slug}
                                githubLink={project.githubLink}
                                demoLink={project.demoLink}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ProjectCard({
    slug,
    title,
    cover: image,
    description,
    detailedDescription,
    githubLink,
    demoLink,
}: Project) {
    const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion)");

    return (
        <div className="flex flex-col gap-6 sm:flex-row">
            <Link
                prefetch="intent"
                unstable_viewTransition
                to={`/projects/${slug}`}
                className="mx-auto sm:max-w-64"
            >
                <img
                    src={image}
                    alt={""}
                    className="rounded-md object-cover"
                    style={{
                        viewTransitionName: prefersReducedMotion
                            ? undefined
                            : `${slug}-cover-image`,
                    }}
                />
            </Link>
            <div>
                <Link
                    prefetch="intent"
                    unstable_viewTransition
                    to={`/projects/${slug}`}
                    className="pointer-events-auto hover:underline"
                >
                    <h2 className="text-md font-semibold">{title}</h2>
                </Link>
                <p className="text-sm font-light text-muted-foreground">
                    {description}
                </p>
                <p className="text-md mt-2 text-muted-foreground">
                    {detailedDescription}
                </p>
                <div className="mt-4">
                    <span className="inline-flex w-full -space-x-px overflow-hidden rounded-md">
                        <Button
                            className="pointer-events-auto w-full rounded-none rounded-l-md"
                            variant="outline"
                            asChild
                            onClick={(e) => e.stopPropagation()}
                        >
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 fill-foreground"
                                >
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                <span className="ml-2 hidden sm:inline">
                                    Github
                                </span>
                            </a>
                        </Button>
                        {demoLink ? (
                            <Button
                                className="pointer-events-auto w-full rounded-none"
                                variant="outline"
                                asChild
                                onClick={(e) => e.stopPropagation()}
                            >
                                <a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LucideLink className="h-4 w-4" />
                                    <span className="ml-2 hidden sm:inline">
                                        Demo
                                    </span>
                                </a>
                            </Button>
                        ) : null}
                        <Button
                            className="pointer-events-auto w-full rounded-none rounded-r-md"
                            asChild
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Link
                                to={`/projects/${slug}`}
                                unstable_viewTransition
                                prefetch="intent"
                            >
                                <span className="mr-2 hidden sm:inline">
                                    Details
                                </span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
}
