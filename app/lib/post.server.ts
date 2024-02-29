import parseFrontMatter from "front-matter";
import { readFile, readdir } from "./fs.server";
import { join, extname } from "path";
import { bundleMDX } from "./mdx.server";

export type ProjectFrontMatter = {
    title: string;
    description: string;
    thumbnail: string;
    detailedDescription: string;
    screenshots?: string[];
    githubLink: string;
    demoLink?: string;
    date: string;
};

/**
 * Get the React component, and frontmatter JSON for a given slug
 * @param slug
 * @returns
 */
export async function getProject(directory: string, slug: string) {
    const projectDirectory = join(process.cwd(), "app", directory);
    const projectFilePath = join(projectDirectory, slug + ".md");

    // Dyamically import all the rehype/remark plugins we are using
    const [rehypePrettyCode, remarkGfm, remarkMdxImages] = await Promise.all([
        import("rehype-pretty-code").then((mod) => mod.default),
        import("remark-gfm").then((mod) => mod.default),
        import("remark-mdx-images").then((mod) => mod.default),
    ]);

    const post = await bundleMDX<ProjectFrontMatter>({
        file: projectFilePath,
        cwd: projectDirectory,
        esbuildOptions: (options) => {
            // Configuration to allow image loading
            // https://github.com/kentcdodds/mdx-bundler#image-bundling
            options.loader = {
                ...options.loader,
                ".png": "dataurl",
                ".jpeg": "dataurl",
                ".jpg": "dataurl",
                ".gif": "dataurl",
            };

            return options;
        },
        mdxOptions: (options) => {
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                remarkGfm,
                remarkMdxImages,
            ];
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                [rehypePrettyCode, { theme: "one-dark-pro" }],
            ];
            return options;
        },
    });

    return {
        ...post,
        frontmatter: {
            ...post.frontmatter,
            screenshots: post.frontmatter.screenshots ?? [],
        },
    };
}

/**
 * Get all frontmatter for all projects
 * @returns
 */
export async function getProjects(directory: string) {
    const filePath = join(process.cwd(), "app", directory);

    const postsPath = await readdir(filePath, { withFileTypes: true }).then(
        (postPaths) =>
            postPaths.filter(
                (postPath) => extname(postPath.name).toLowerCase() === ".md"
            )
    );

    const posts = await Promise.all(
        postsPath.map(async (dirent) => {
            const fPath = join(filePath, dirent.name);
            const file = await readFile(fPath);
            const frontmatter = parseFrontMatter(file.toString());
            const attributes = frontmatter.attributes as ProjectFrontMatter;

            return {
                slug: dirent.name.replace(/\.md/, ""),
                frontmatter: {
                    ...attributes,
                },
            };
        })
    );

    return posts.sort(
        (postA, postB) =>
            new Date(postB.frontmatter.date).getTime() -
            new Date(postA.frontmatter.date).getTime()
    );
}