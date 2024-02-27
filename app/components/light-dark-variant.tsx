import { cn } from "~/lib/utils";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { Theme, useTheme } from "remix-themes";

interface LightDarkVariantProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    light: React.ReactNode;
    dark: React.ReactNode;
}

const animationVariants = {
    initial: { rotate: 90, scale: 0 },
    animate: { rotate: 0, scale: 1 },
    exit: { rotate: -90, scale: 0 },
};

export default function LightDarkVariant({
    light,
    dark,
    ...props
}: LightDarkVariantProps) {
    const [theme] = useTheme();
    console.log(theme);

    return (
        <div {...props} className={cn("relative", props.className)}>
            <LazyMotion features={domAnimation}>
                <AnimatePresence mode="popLayout" initial={false}>
                    {theme === Theme.LIGHT ? (
                        <m.div
                            variants={animationVariants}
                            initial={"initial"}
                            animate={"animate"}
                            exit={"exit"}
                            transition={{
                                type: "spring",
                                bounce: 0,
                                duration: 0.2,
                            }}
                            key="light"
                        >
                            {light}
                        </m.div>
                    ) : (
                        <m.div
                            key="dark"
                            variants={animationVariants}
                            initial={"initial"}
                            animate={"animate"}
                            exit={"exit"}
                            transition={{
                                type: "spring",
                                bounce: 0,
                                duration: 0.2,
                            }}
                        >
                            {dark}
                        </m.div>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </div>
    );
}
