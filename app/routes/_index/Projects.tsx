import { Button } from "~/components/ui/button";
import { Link, useNavigation } from "@remix-run/react";
import { ArrowRight, Loader2, Link as LucideLink } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import BlurryBlob from "~/components/blobs/blurry-blob";

interface Project {
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
        <div
            className="relative flex flex-col items-center"
            style={{ contain: "paint" }}
        >
            <div className="max-w-prose" id="projects">
                <h1 className="sticky top-0 z-30 w-full bg-background/85 px-3 py-6 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm">
                    PROJECTS
                </h1>
                <BlurryBlob className="absolute left-1/2 top-1/2 h-[800px] w-[3200px] -translate-x-1/2 -translate-y-1/2 -rotate-[30deg]" />
                <ul className="group pointer-events-none flex flex-col gap-y-12 px-3">
                    {projects.map((project) => (
                        <li key={project.title}>
                            <div className="">
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
            </div>
        </div>
    );
}

function ProjectCard({
    slug,
    title,
    thumbnail,
    description,
    detailedDescription,
    githubLink,
    demoLink,
}: Project) {
    const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion)");

    const navigation = useNavigation();

    const isNavigatingToThisProject =
        navigation.state === "loading" &&
        navigation.location?.pathname === `/projects/${slug}`;

    return (
        <div className="group/card pointer-events-auto relative -mx-3 flex flex-col gap-6 rounded px-3 py-6 transition duration-150 group-hover:opacity-75 group-hover:hover:bg-slate-200/50 group-hover:hover:opacity-100 dark:group-hover:hover:bg-slate-800/50 sm:flex-row">
            <div
                className="h-40 overflow-hidden rounded-md focus-within:border-2 focus-within:border-foreground focus-within:active:border-0 sm:h-32 sm:w-64"
                style={{
                    viewTransitionName: prefersReducedMotion
                        ? undefined
                        : `${slug}-cover-image`,
                }}
            >
                <img
                    src={thumbnail}
                    alt={""}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-150 hover:scale-105 focus:scale-105 group-hover/card:scale-105"
                />
            </div>
            <div className="basis-2/3">
                <Link
                    to={`/projects/${slug}`}
                    unstable_viewTransition
                    prefetch="intent"
                    className="static before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 hover:underline"
                    aria-label={`Read more about ${title}`}
                >
                    <h2 className="text-md pointer-events-auto font-semibold">
                        {title}
                    </h2>
                </Link>
                <p className="text-sm font-light text-muted-foreground">
                    {description}
                </p>
                <p className="text-md mt-2 text-muted-foreground">
                    {detailedDescription}
                </p>
                <div className="my-4 inline-flex w-full -space-x-px rounded-md">
                    <Button
                        className="z-20 w-full rounded-none rounded-l-md outline-none"
                        variant="outline"
                        asChild
                    >
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="outline-none"
                            aria-label={`Github repository for ${title}`}
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
                            className="z-20 w-full rounded-none"
                            variant="outline"
                            asChild
                        >
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Demo for ${title}`}
                            >
                                <LucideLink className="h-4 w-4" />
                                <span className="ml-2 hidden sm:inline">
                                    Demo
                                </span>
                            </a>
                        </Button>
                    ) : null}
                    <Button
                        className="z-20 w-full rounded-none rounded-r-md"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                        disabled={isNavigatingToThisProject}
                    >
                        <Link
                            to={`/projects/${slug}`}
                            unstable_viewTransition
                            prefetch="intent"
                            aria-label={`Read more about ${title}`}
                        >
                            {isNavigatingToThisProject ? (
                                <Loader2 className="animate-spin" />
                            ) : (
                                <>
                                    <span className="mr-2 hidden sm:inline">
                                        Details
                                    </span>
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
