import { LoaderFunctionArgs, json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { getProject } from "~/lib/post-server";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [
        {
            title: data?.frontmatter.title
                ? `Toh Hong Xiang - ${data.frontmatter.title}`
                : "Untitled",
            description: data?.frontmatter.description ?? "",
        },
    ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const slug = params.slug;
    if (!slug) throw new Response("Not found", { status: 404 });

    const post = await getProject("projects", slug);

    if (!post) {
        throw new Response("Not found", { status: 404 });
    }

    const { frontmatter, code } = post;
    return json({ frontmatter, code });
};

export default function SpecificProjectRoute() {
    const { code, frontmatter } = useLoaderData<typeof loader>();
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <div className="h-full w-full px-12">
            <div className="mx-auto flex max-w-[80ch] flex-col gap-8 py-16">
                <h1 className="text-center text-4xl font-bold tracking-tight lg:text-5xl">
                    {frontmatter.title}
                </h1>
                <p className="text-center text-lg font-semibold text-muted-foreground">
                    <i>{frontmatter.detailedDescription}</i>
                </p>
            </div>
            <div className="px-4">
                <Carousel
                    className="mx-auto max-w-[80ch]"
                    opts={{ loop: true }}
                >
                    <CarouselContent>
                        {[frontmatter.cover, ...frontmatter.screenshots].map(
                            (image) => (
                                <CarouselItem key={image}>
                                    <img
                                        src={image}
                                        alt=""
                                        className="h-full w-full object-contain"
                                    />
                                </CarouselItem>
                            )
                        )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="prose mx-auto py-16 dark:prose-invert">
                <Component />
            </div>
        </div>
    );
}
