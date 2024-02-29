// ./app/routes/resource/og.ts

import { LoaderFunctionArgs } from "@remix-run/node";
import { createOGImage } from "~/lib/createOGImage.server";

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { origin, searchParams } = new URL(request.url);
    const title = searchParams.get("title") ?? `Big Title`;
    const subtitle = searchParams.get("subtitle") ?? "A tiny subtitle";
    const imgSrc =
        searchParams.get("src") ??
        "https://github.com/tohhongxiang123/remix-portfolio/blob/master/public/images/hero.png?raw=true";

    const png = await createOGImage(
        title,
        subtitle,
        imgSrc,
        origin,
        OG_IMAGE_WIDTH,
        OG_IMAGE_HEIGHT
    );

    // Respond with the PNG buffer
    return new Response(png, {
        status: 200,
        headers: {
            // Tell the browser the response is an image
            "Content-Type": "image/png",
            "cache-control": "public, immutable, no-transform, max-age=86400",
        },
    });
};
