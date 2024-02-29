import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    MetaFunction,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";
import tailwindStyles from "~/tailwind.css";
import clsx from "clsx";
import {
    PreventFlashOnWrongTheme,
    ThemeProvider,
    useTheme,
} from "remix-themes";
import { themeSessionResolver } from "./sessions.server";
import { ModeToggle } from "./components/mode-toggle";
import { SpeedInsights } from "@vercel/speed-insights/remix";
export const meta: MetaFunction = () => {
    return [
        { title: "Toh Hong Xiang" },
        {
            name: "description",
            content: "Learn more about me in my Portfolio!",
        },

        // facebook meta tags
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:image",
            content:
                "https://github.com/tohhongxiang123/remix-portfolio/blob/master/public/images/og.png?raw=true",
        },

        // twitter meta tags
        {
            name: "twitter:card",
            content: "summary_large_image",
        },
        {
            name: "twitter:image",
            content:
                "https://github.com/tohhongxiang123/remix-portfolio/blob/master/public/images/og.png?raw=true",
        },
    ];
};

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
    const { getTheme } = await themeSessionResolver(request);
    return {
        theme: getTheme(),
    };
}

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: tailwindStyles },
    {
        rel: "preload",
        href: "/fonts/inter/Inter-VariableFont_slnt,wght.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
    },
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function AppWithProviders() {
    const data = useLoaderData<typeof loader>();
    return (
        <ThemeProvider
            specifiedTheme={data.theme}
            themeAction="/action/set-theme"
        >
            <App />
        </ThemeProvider>
    );
}

export function App() {
    const data = useLoaderData<typeof loader>();
    const [theme] = useTheme();
    return (
        <html lang="en" className={clsx(theme)}>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
                <Links />
            </head>
            <body className="relative bg-background">
                <div className="fixed right-2 top-2 z-30">
                    <ModeToggle />
                </div>
                <SpeedInsights />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
