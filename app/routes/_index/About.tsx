export default function About() {
    return (
        <div className="flex w-full flex-col items-center px-4" id="about">
            <div className="max-w-prose">
                <h1 className="sticky top-0 z-10 bg-background/85 px-3 py-6 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm">
                    About Me
                </h1>
                <div className="flex flex-col gap-y-4 px-3 leading-normal text-muted-foreground">
                    <p>
                        My foray into the world of web development began in
                        2014, sparked by the fascinating discovery of the
                        &quot;Inspect Element&quot; feature, which opened my
                        eyes to the inner workings of websites. What started as
                        curiosity quickly evolved into a deep-seated passion for
                        crafting and enhancing digital spaces.
                    </p>
                    <p>
                        Today, I pride myself on developing comprehensive,
                        responsive applications that serve real-world purposes.
                        My toolkit of choice includes React (using NextJS) and
                        Typescript, which I leverage to create seamless,
                        user-centric experiences.
                    </p>
                    <p>
                        When I am not coding, I am usually playing Osu!, League
                        of Legends, or bouldering!
                    </p>
                </div>
            </div>
        </div>
    );
}
