import { json, useLoaderData, useNavigate } from "@remix-run/react";
import { ChevronLeft } from "lucide-react";
import ProjectCard from "~/components/project-card";
import { Button } from "~/components/ui/button";
import { getProjects } from "~/lib/post.server";

export const meta = () => [{ title: "Projects | THX" }];
export const loader = async () => {
    const posts = await getProjects("projects");
    return json({
        projects: posts.map((post) => ({
            ...post.frontmatter,
            slug: post.slug,
        })),
    });
};

export default function ProjectsIndexPage() {
    const data = useLoaderData<typeof loader>();
    const navigate = useNavigate();

    return (
        <div className="relative mx-auto flex max-w-[80ch] flex-col gap-8 py-16">
            <div>
                <Button
                    className="group mb-4"
                    variant="ghost"
                    onClick={() => navigate(-1)}
                >
                    <ChevronLeft className="mr-2 h-4 w-4 transition duration-150 group-focus-within:-translate-x-1 group-hover:-translate-x-1" />
                    <span>Go back</span>
                </Button>
                <h1 className="mb-8 ml-3 text-4xl font-bold lg:text-5xl">
                    All Projects
                </h1>
                <ul className="group pointer-events-none mb-8 flex flex-col gap-y-12 px-3">
                    {data.projects.map((project) => (
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
