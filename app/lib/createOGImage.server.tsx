import { Resvg } from "@resvg/resvg-js";
import type { SatoriOptions } from "satori";
import satori from "satori";

// Load the font from the "public" directory
const fontLoader = (baseUrl: string, filename = "Inter-ExtraBold.ttf") =>
    fetch(new URL(`${baseUrl}/fonts/inter/static/${filename}`)).then((res) =>
        res.arrayBuffer()
    );

export async function createOGImage(
    title: string,
    subtitle: string,
    imageSrc: string,
    requestUrl: string,
    width: number,
    height: number
) {
    const interExtraBold = await fontLoader(requestUrl, "Inter-ExtraBold.ttf");
    const interSemiBold = await fontLoader(requestUrl, "Inter-SemiBold.ttf");

    const options: SatoriOptions = {
        width,
        height,
        fonts: [
            {
                name: "Inter",
                data: interExtraBold,
                style: "normal",
                weight: 800,
            },
            {
                name: "Inter",
                data: interSemiBold,
                style: "normal",
                weight: 600,
            },
        ],
    };

    const svg = await satori(
        <div
            style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                fontSize: 32,
                fontWeight: 800,
                width: options.width,
                height: options.height,
                backgroundImage:
                    "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
                backgroundSize: "100px 100px",
                fontFamily: "Inter",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img
                src={imageSrc}
                alt=""
                style={{
                    width: 300,
                    height: 300,
                    objectFit: "cover",
                    margin: 12,
                }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, #6366f1, #10b981)",
                        backgroundClip: "text",
                        color: "transparent",
                        fontSize: 96,
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        color: "#64748b",
                        fontWeight: 600,
                        fontSize: 48,
                    }}
                >
                    {subtitle}
                </div>
            </div>
        </div>,
        options
    );

    // Convert the SVG to PNG with "resvg"
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    return pngData.asPng();
}

export async function createProjectOGImage(
    title: string,
    subtitle: string,
    imageSrc: string,
    requestUrl: string,
    width: number,
    height: number
) {
    const interExtraBold = await fontLoader(requestUrl, "Inter-ExtraBold.ttf");
    const interSemiBold = await fontLoader(requestUrl, "Inter-SemiBold.ttf");

    const options: SatoriOptions = {
        width,
        height,
        fonts: [
            {
                name: "Inter",
                data: interExtraBold,
                style: "normal",
                weight: 800,
            },
            {
                name: "Inter",
                data: interSemiBold,
                style: "normal",
                weight: 600,
            },
        ],
    };

    const svg = await satori(
        <div
            style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                fontSize: 32,
                fontWeight: 800,
                width: options.width,
                height: options.height,
                backgroundImage:
                    "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
                backgroundSize: "100px 100px",
                fontFamily: "Inter",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 30,
            }}
        >
            <img
                src={imageSrc}
                alt=""
                style={{
                    width: 300,
                    height: 300,
                    objectFit: "cover",
                    margin: 12,
                    borderRadius: 30,
                    border: "3px solid rgba(0, 0, 0, 0.15)",
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 700,
                }}
            >
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, #6366f1, #10b981)",
                        backgroundClip: "text",
                        color: "transparent",
                        fontSize: 64,
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        color: "#64748b",
                        fontWeight: 600,
                        fontSize: 24,
                    }}
                >
                    {subtitle}
                </div>
            </div>
        </div>,
        options
    );

    // Convert the SVG to PNG with "resvg"
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    return pngData.asPng();
}
