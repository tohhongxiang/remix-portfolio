import { LoaderFunctionArgs, json } from "@remix-run/node";
import {
    MetaFunction,
    isRouteErrorResponse,
    useLoaderData,
    useRouteError,
} from "@remix-run/react";
import { getProject } from "~/lib/post-server";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import { Info, LucideLink } from "lucide-react";
import ImageCarousel from "~/components/image-carousel";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [
        {
            title: data?.frontmatter.title
                ? `${data.frontmatter.title} | THX`
                : "Untitled",
            description: data?.frontmatter.description ?? "",
        },
    ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const slug = params.slug;
    if (!slug) throw new Response(`Slug required!`, { status: 404 });

    const post = await getProject("projects", slug);

    if (!post) {
        throw new Response(`Not found: ${slug}`, { status: 404 });
    }

    const { frontmatter, code } = post;
    return json({ frontmatter, code, slug });
};

export default function SpecificProjectRoute() {
    const { code, frontmatter, slug } = useLoaderData<typeof loader>();
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <div className="h-full w-full px-6">
            <div className="mx-auto flex max-w-[80ch] flex-col gap-8 py-16">
                <h1
                    className="text-center text-4xl font-bold lg:text-5xl"
                    style={{ viewTransitionName: `${slug}-title` }}
                >
                    {frontmatter.title}
                </h1>
                <p
                    className="text-center text-muted-foreground"
                    style={{
                        viewTransitionName: `${slug}-detailed-description`,
                    }}
                >
                    {frontmatter.detailedDescription}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                    {frontmatter.githubLink ? (
                        <a
                            href={frontmatter.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-x-2 rounded-md px-4 py-2 hover:bg-slate-300/30 dark:hover:bg-slate-800/30"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 fill-muted-foreground group-hover:fill-foreground"
                            >
                                <title>GitHub</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            <span className="font-semibold text-muted-foreground group-hover:text-foreground">
                                Github
                            </span>
                        </a>
                    ) : null}
                    {frontmatter.demoLink ? (
                        <a
                            href={frontmatter.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-x-2 rounded-md px-4 py-2 hover:bg-slate-300/30 dark:hover:bg-slate-800/30"
                        >
                            <LucideLink className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />
                            <span className="font-semibold text-muted-foreground group-hover:text-foreground">
                                Demo
                            </span>
                        </a>
                    ) : null}
                </div>
            </div>
            <ImageCarousel
                className="mx-auto max-w-[80ch]"
                style={{ viewTransitionName: `${slug}-cover-image` }}
            >
                {[frontmatter.cover, ...frontmatter.screenshots].map(
                    (image) => (
                        <ImageCarousel.Item key={image}>
                            <img
                                src={image}
                                alt=""
                                className="h-full w-full rounded-md object-contain"
                            />
                        </ImageCarousel.Item>
                    )
                )}
            </ImageCarousel>
            <div className="prose mx-auto py-16 dark:prose-invert">
                <Component />
            </div>
        </div>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();

    return (
        <div className="flex min-h-full flex-col items-center justify-start p-6">
            <div className="max-w-prose rounded-md bg-red-500 p-4 dark:bg-red-700">
                {isRouteErrorResponse(error) ? (
                    <>
                        <h1 className="mb-4 flex items-center text-xl font-bold uppercase tracking-wide text-slate-100">
                            <Info />
                            <span className="ml-2">
                                {error.status} {error.statusText}
                            </span>
                        </h1>
                        <p className="text-slate-200">{error.data}</p>
                    </>
                ) : error instanceof Error ? (
                    <>
                        <h1 className="mb-4 flex items-center text-xl font-bold uppercase tracking-wide text-slate-100">
                            <Info />
                            <span className="ml-2">Error!</span>
                        </h1>
                        <p className="text-slate-200">{error.message}</p>
                    </>
                ) : (
                    <>
                        <h1 className="mb-4 flex items-center text-xl font-bold uppercase tracking-wide text-slate-100">
                            <Info />
                            <span className="ml-2">Error!</span>
                        </h1>
                        <p className="text-slate-200">
                            An unexpected error has occurred
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
