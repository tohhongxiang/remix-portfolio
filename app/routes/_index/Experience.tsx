import { ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function Experience() {
    return (
        <section className="flex w-full flex-col items-center px-4">
            <div className="max-w-prose" id="experience">
                <h1 className="sticky top-0 z-10 bg-background/85 px-3 py-6 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm">
                    Experience
                </h1>
                <ul className="mb-8 flex flex-col items-start justify-center gap-y-8 px-3">
                    <li>
                        <ExperienceCard
                            title="Private Tutor"
                            company="Self-Employed"
                            start="January 2021"
                            end="Present"
                            description={[
                                "Developed personalized lesson plans tailored to individual student needs, leading to 30% grade improvements",
                                "Enhanced student learning by engaging in real-world projects, making students more confident and passionate",
                            ]}
                        />
                    </li>
                    <li>
                        <ExperienceCard
                            title="Marketplace Intelligence Engineer"
                            company="Shopee Singapore"
                            start="May 2022"
                            end="December 2022"
                            description={[
                                "Optimized deployment monitoring with Grafana, increasing deployment efficiency by 20%",
                                "Utilized clean architecture principles and automated testing to ensure maintainability and testability",
                                "Engineered scalable applications with Redis and Golang, decreasing latency by 10%",
                            ]}
                        />
                    </li>
                    <li>
                        <ExperienceCard
                            title="Software Engineer"
                            company="Industrial Electronics Pte Ltd"
                            start="December 2019"
                            end="July 2020"
                            description={[
                                "Enhanced trading functionalities in a ReactJS, MongoDB, and GraphQL e-commerce app, boosting performance by 15%",
                                "Collaborated closely with content writers to develop a user-friendly drag-and-drop template builder in ReactJS, reducing workflow time by 15%",
                                "Proactively identified and resolved issues in standups, consistently achieving milestones two weeks ahead of schedule",
                            ]}
                        />
                    </li>
                </ul>
                <div className="px-3">
                    <Button asChild className="group" variant="secondary">
                        <a
                            href="Toh-Hong-Xiang-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            <span>View Full Resume</span>
                            <ChevronRight className="ml-2 h-4 w-4 transition duration-150 group-focus-within:translate-x-1 group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

interface ExperienceCardProps {
    title: string;
    company: string;
    start: string;
    end: string;
    description: string | string[];
}
function ExperienceCard({
    title,
    company,
    start,
    end,
    description,
}: ExperienceCardProps) {
    return (
        <div>
            <p className="text-sm uppercase text-muted-foreground">
                {start} - {end}
            </p>
            <h2 className="text-medium mb-2 font-semibold">
                {title} - {company}
            </h2>
            {description instanceof Array ? (
                <ul className="ms-4 list-outside list-disc text-muted-foreground">
                    {description.map((description) => (
                        <li key={description}>{description}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground">{description}</p>
            )}
        </div>
    );
}
