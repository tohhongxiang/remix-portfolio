import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import HeroSection from "./Hero";
import Projects from "./Projects";
import { useLoaderData } from "@remix-run/react";
import { getProjects } from "~/lib/post-server";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";

export const meta: MetaFunction = () => {
    return [
        { title: "Toh Hong Xiang" },
        {
            name: "description",
            content: "Portfolio showcase for Toh Hong Xiang",
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

    return (
        <div className="flex flex-col gap-y-16 px-3">
            <HeroSection />
            <About />
            <Experience />
            <Projects projects={data.projects} />
            <Contact />
            <Footer />
        </div>
    );
}
