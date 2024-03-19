import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { domMax, LazyMotion } from "framer-motion";
import Wave from "~/components/blobs/wave";
import Footer from "~/components/footer";
import { getProjects } from "~/lib/post.server";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import HeroSection from "./Hero";
import Projects from "./Projects";

export const loader: LoaderFunction = async () => {
    const posts = await getProjects("projects", true);
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
        <LazyMotion features={domMax} strict>
            <div className="flex flex-col gap-y-16">
                <HeroSection />
                <About />
                <Experience />
                <Wave />
                <Projects projects={data.projects} />
                <Wave />
                <Contact />
                <Footer />
            </div>
        </LazyMotion>
    );
}
