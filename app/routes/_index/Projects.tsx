import { cn } from "~/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { ArrowRight, Link as LucideLink } from "lucide-react";
import { motion } from "framer-motion";

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

const sectionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.6 } },
};

const projectTitleVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
        opacity: 1,
        x: 0,
    },
};

const projectContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            duration: 0.1,
        },
    },
};

const projectContainerItemVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export default function Projects({ projects }: ProjectProps) {
    return (
        <motion.div
            className={cn(
                "bg-blur flex min-h-screen w-full flex-grow flex-col items-center justify-center gap-x-8 p-4 py-32"
            )}
            id="projects"
            initial="hidden"
            whileInView="show"
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h1
                variants={projectTitleVariants}
                className="mb-8 text-4xl font-light tracking-wide text-muted-foreground"
                viewport={{ once: true, amount: 0.5 }}
            >
                PROJECTS
            </motion.h1>
            <motion.ul
                className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
                variants={projectContainerVariants}
            >
                {projects.map((project) => (
                    <motion.li
                        key={project.title}
                        variants={projectContainerItemVariants}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <ProjectCard
                            title={project.title}
                            cover={project.cover}
                            description={project.description}
                            detailedDescription={project.detailedDescription}
                            slug={project.slug}
                            githubLink={project.githubLink}
                            demoLink={project.demoLink}
                        />
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
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
    return (
        <Card className="group pointer-events-none relative flex h-full max-w-96 flex-col overflow-hidden rounded-md shadow-md transition-all duration-150 hover:scale-[1.01] hover:shadow-lg">
            <div
                className={cn(
                    "absolute bottom-0 left-0 w-[1px]",
                    "transition-all delay-150 duration-200 ease-in-out",
                    "h-20 bg-gradient-to-t from-transparent from-10% via-primary via-20% to-transparent to-30% opacity-0 group-hover:h-full group-hover:opacity-100"
                )}
            />
            <img
                src={image}
                alt={""}
                className="rounded-t-md object-cover"
                style={{ height: 180 }}
            />
            <CardHeader>
                <Link
                    to={`/projects/${slug}`}
                    className="pointer-events-auto h-full w-full hover:underline"
                >
                    <CardTitle>{title}</CardTitle>
                </Link>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="grow">
                <p>{detailedDescription}</p>
            </CardContent>
            <CardFooter className="mt-auto">
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
                        <Link to={`/projects/${slug}`}>
                            <span className="mr-2 hidden sm:inline">
                                Details
                            </span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </span>
            </CardFooter>
        </Card>
    );
}
