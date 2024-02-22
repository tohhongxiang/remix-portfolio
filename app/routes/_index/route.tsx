import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import HeroSection from "./Hero";
import Projects from "./Projects";
import { useLoaderData } from "@remix-run/react";
import { getProjects } from "~/lib/post-server";
import About from "./About";
import Contact from "./Contact";

export const meta: MetaFunction = () => {
    return [
        { title: "Toh Hong Xiang" },
        {
            name: "Portfolio for Toh Hong Xiang",
            content: "I'm a web developer!",
        },
    ];
};

export const loader: LoaderFunction = async () => {
    const posts = await getProjects("projects");
    return json({
        projects: posts.map((post) => ({
            ...post.frontmatter,
            slug: post.slug,
        })),
    });
};

export default function Index() {
    const data = useLoaderData<typeof loader>();
    console.log(data.projects);
    return (
        <div className="overflow-hidden">
            <HeroSection />
            <About />
            <Projects projects={data.projects} />
            <Contact />
        </div>
    );
}
