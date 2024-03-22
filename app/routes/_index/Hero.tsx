import { m, useAnimationControls } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import LightDarkVariant from "~/components/light-dark-variant";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const imageVariants = {
    hidden: {},
    show: {
        transition: {
            delay: 0.5,
        },
    },
};

const ctaTextVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const ctaTextItemVariants = {
    hidden: { opacity: 0, y: "-20px" },
    show: { opacity: 1, y: 0 },
};

const socialIconVariants = {
    hidden: { opacity: 0, y: "-20px" },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const socialIconItemsVariants = {
    hidden: { opacity: 0, y: "-20px" },
    show: { opacity: 1, y: 0 },
};

const ctaButtonsVariants = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren",
        },
    },
};

const ctaButtonsItemsVariants = {
    hidden: { opacity: 0, x: -15 },
    show: { opacity: 1, x: 0 },
};

export default function HeroSection() {
    const [isTextShown, setIsTextShown] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsTextShown(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    const controls = useAnimationControls();

    const heroTextGradientClassNames =
        "bg-gradient-to-r from-indigo-500 to-emerald-500 dark:from-indigo-500 dark:to-pink-500 pb-3 -mb-3 text-transparent bg-clip-text";

    return (
        <section
            className={cn(
                "relative -mb-16 flex min-h-screen w-full flex-grow flex-col justify-center gap-x-8 gap-y-8 p-4"
            )}
        >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#00000033_1px,#00000000_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[radial-gradient(#ffffff33_1px,#00000000_1px)]"></div>
            <div className="relative flex flex-col items-center justify-center gap-x-4 gap-y-2">
                <m.div
                    initial="hidden"
                    animate="show"
                    variants={imageVariants}
                    layout
                    onLayoutAnimationComplete={() => controls.start("show")}
                >
                    <LightDarkVariant
                        light={
                            <picture>
                                <source
                                    type="image/avif"
                                    srcSet="/images/hero.avif"
                                />
                                <source
                                    type="image/webp"
                                    srcSet="/images/hero.webp"
                                />
                                <img
                                    alt=""
                                    src="/images/hero.png"
                                    className="mx-auto h-auto w-[250px] object-contain sm:h-[300px] sm:w-[300px]"
                                    fetchpriority="high"
                                />
                            </picture>
                        }
                        dark={
                            <picture>
                                <source
                                    type="image/avif"
                                    srcSet="/images/hero-dark.avif"
                                />
                                <source
                                    type="image/webp"
                                    srcSet="/images/hero-dark.webp"
                                />
                                <img
                                    src="/images/hero-dark.png"
                                    alt=""
                                    className="mx-auto h-auto w-[250px] object-contain sm:h-[300px] sm:w-[300px]"
                                    fetchpriority="high"
                                />
                            </picture>
                        }
                    />
                </m.div>
                {isTextShown ? (
                    <>
                        <m.div
                            className="flex flex-col items-center justify-center p-4 md:w-[60%] lg:w-1/2"
                            initial="hidden"
                            animate="show"
                            variants={ctaTextVariants}
                        >
                            <m.h1
                                variants={ctaTextItemVariants}
                                className={cn(
                                    "text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl",
                                    heroTextGradientClassNames
                                )}
                            >
                                Toh Hong Xiang
                            </m.h1>
                            <m.p
                                className={cn(
                                    "mb-4 text-balance text-center text-lg font-semibold text-foreground/80 sm:text-xl"
                                )}
                                variants={ctaTextItemVariants}
                            >
                                Full-stack Web Developer
                            </m.p>
                            <m.p
                                className={cn(
                                    "mb-8 text-balance text-center text-lg text-muted-foreground sm:text-xl"
                                )}
                                variants={ctaTextItemVariants}
                            >
                                I love designing simple yet exceptional digital
                                experiences. I&apos;m focused on building
                                accessible, human-centered products!
                            </m.p>
                            <SocialIcons />
                        </m.div>
                    </>
                ) : null}
            </div>
            <m.div
                initial="hidden"
                animate={controls}
                variants={ctaButtonsVariants}
                className="z-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
            >
                <m.div variants={ctaButtonsItemsVariants}>
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-md"
                        onClick={() =>
                            document
                                .getElementById("about")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        aria-label="Go to About Me section"
                    >
                        <span>About Me!</span>
                    </Button>
                </m.div>
                <m.div variants={ctaButtonsItemsVariants}>
                    <Button
                        size="lg"
                        className="text-md"
                        onClick={() =>
                            document
                                .getElementById("projects")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        aria-label="Go to Projects section"
                    >
                        <span>See My Projects</span>
                        <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
                    </Button>
                </m.div>
            </m.div>
        </section>
    );
}

function SocialIcons({ className }: { className?: string }) {
    return (
        <m.div
            className={cn(
                "flex flex-wrap items-center justify-center gap-8 md:justify-start",
                className
            )}
            variants={socialIconVariants}
        >
            <m.a
                variants={socialIconItemsVariants}
                href="https://github.com/tohhongxiang"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 fill-muted-foreground transition-all duration-150 ease-in-out hover:rotate-3 hover:scale-105 hover:fill-foreground sm:h-16 sm:w-16 "
                >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            </m.a>
            <m.a
                variants={socialIconItemsVariants}
                href="https://www.linkedin.com/in/tohhongxiang/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 fill-muted-foreground transition-all duration-150 ease-in-out hover:rotate-3 hover:scale-105 hover:fill-foreground sm:h-16 sm:w-16 "
                >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </m.a>
            <m.a
                variants={socialIconItemsVariants}
                href="mailto:tohhongxiang@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 fill-muted-foreground transition-all duration-150 ease-in-out hover:rotate-3 hover:scale-105 hover:fill-foreground sm:h-16 sm:w-16 "
                >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
            </m.a>
        </m.div>
    );
}
