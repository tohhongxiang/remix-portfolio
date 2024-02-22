import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { motion, useAnimationControls } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const containerTextVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
};

export default function About() {
    const controls = useAnimationControls();

    return (
        <div
            className="relative flex w-full flex-col items-center justify-center p-4"
            id="about"
        >
            <div className="flex flex-col items-center gap-x-32 xl:flex-row">
                <motion.div
                    className="max-w-prose py-16"
                    variants={containerVariants}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.75 }}
                >
                    <motion.h1
                        variants={containerTextVariants}
                        className="mb-8 text-center text-3xl font-light tracking-wide text-muted-foreground sm:text-left"
                    >
                        ABOUT ME
                    </motion.h1>
                    <motion.p
                        variants={containerTextVariants}
                        onAnimationComplete={() => controls.start("show")}
                        className="text-md mb-4 font-medium lg:text-lg"
                    >
                        My foray into the world of web development began in
                        2014, sparked by the fascinating discovery of the
                        &quot;Inspect Element&quot; feature, which opened my
                        eyes to the inner workings of websites. What started as
                        curiosity quickly evolved into a deep-seated passion for
                        crafting and enhancing digital spaces.
                    </motion.p>
                    <motion.p
                        variants={containerTextVariants}
                        className="text-md mb-8 font-medium lg:text-lg"
                    >
                        Today, I pride myself on developing comprehensive,
                        responsive applications that serve real-world purposes.
                        My toolkit of choice includes React (using NextJS) and
                        Typescript, which I leverage to create seamless,
                        user-centric experiences.
                    </motion.p>
                    <motion.div variants={containerTextVariants}>
                        <Button asChild>
                            <Link to="/about">Learn more!</Link>
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.img
                    variants={imageVariants}
                    initial={"hidden"}
                    animate={controls}
                    viewport={{ once: true, amount: 0.75 }}
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
                    alt=""
                    className="my-auto w-full max-w-prose flex-grow rounded-lg"
                />
            </div>
        </div>
    );
}
