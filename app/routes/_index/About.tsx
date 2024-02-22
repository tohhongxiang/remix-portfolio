export default function About() {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="max-w-prose">
                <h1 className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-foreground sm:text-left">
                    About Me
                </h1>
                <p className="mb-4 leading-normal text-muted-foreground">
                    My foray into the world of web development began in 2014,
                    sparked by the fascinating discovery of the &quot;Inspect
                    Element&quot; feature, which opened my eyes to the inner
                    workings of websites. What started as curiosity quickly
                    evolved into a deep-seated passion for crafting and
                    enhancing digital spaces.
                </p>
                <p className="leading-normal text-muted-foreground">
                    Today, I pride myself on developing comprehensive,
                    responsive applications that serve real-world purposes. My
                    toolkit of choice includes React (using NextJS) and
                    Typescript, which I leverage to create seamless,
                    user-centric experiences.
                </p>
            </div>
        </div>
    );
}
