import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function About() {
    return (
        <div
            className="flex w-full flex-col items-center justify-center p-4"
            id="about"
        >
            <div className="flex flex-col items-center gap-x-32 xl:flex-row">
                <div className="max-w-prose py-16">
                    <h1 className="mb-8 text-center text-3xl font-light tracking-wide text-muted-foreground sm:text-left">
                        ABOUT ME
                    </h1>
                    <p className="text-md mb-4 font-medium lg:text-lg">
                        My foray into the world of web development began in
                        2014, sparked by the fascinating discovery of the
                        &quot;Inspect Element&quot; feature, which opened my
                        eyes to the inner workings of websites. What started as
                        curiosity quickly evolved into a deep-seated passion for
                        crafting and enhancing digital spaces.
                    </p>
                    <p className="text-md mb-8 font-medium lg:text-lg">
                        Today, I pride myself on developing comprehensive,
                        responsive applications that serve real-world purposes.
                        My toolkit of choice includes React (using NextJS) and
                        Typescript, which I leverage to create seamless,
                        user-centric experiences.
                    </p>
                    <Button asChild>
                        <Link to="/about">Learn more!</Link>
                    </Button>
                </div>
                <img
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
                    alt=""
                    className="my-auto w-full max-w-prose flex-grow rounded-lg"
                />
            </div>
        </div>
    );
}
