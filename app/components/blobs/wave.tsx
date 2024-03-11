import { LazyMotion, domAnimation, m } from "framer-motion";
import { cn } from "~/lib/utils";

export default function Wave({
    className,
    ...props
}: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) {
    return (
        <div {...props} className={cn(className, "-z-10")}>
            <LazyMotion features={domAnimation}>
                <m.svg
                    id="visual"
                    viewBox="0 0 960 50"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <m.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            delay: 1.4,
                            duration: 0.7,
                            ease: "easeIn",
                        }}
                        className="stroke-emerald-600/30 dark:stroke-indigo-500/30"
                        d="M0 29L26.7 29C53.3 29 106.7 29 160 31.3C213.3 33.7 266.7 38.3 320 34.2C373.3 30 426.7 17 480 12.2C533.3 7.3 586.7 10.7 640 15.2C693.3 19.7 746.7 25.3 800 24.5C853.3 23.7 906.7 16.3 933.3 12.7L960 9"
                        fill="none"
                        strokeDasharray="0 0"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        strokeWidth="2"
                    ></m.path>
                </m.svg>
            </LazyMotion>
        </div>
    );
}
