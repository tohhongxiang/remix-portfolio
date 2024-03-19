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
                            title="Marketplace Intelligence Engineer"
                            company="Shopee Singapore"
                            start="May 2022"
                            end="December 2022"
                            description={[
                                "Enhanced cross-team deployment monitoring infrastructures with Grafana, improving deployment efficiency by 20%.",
                                "Architectured scalable back-end solutions using Redis and Golang, reducing latency by 10%.",
                                "Optimized A/B testing processes by creating front-end dashboard visualizations in ReactJS and Typescript, resulting in a 20% increase in click-through rates.",
                                "Championed clean architecture principles and automated unit testing to ensure maintainability and testability, fostering collaboration within the team.",
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
                                "Enhanced trading functionalities of ReactJS, MongoDB, and GraphQL e-commerce application, driving a 15% improvement in performance.",
                                "Collaborated with content writers throughout the full product lifecycle to gather technical requirements and prototype a user-friendly drag-and-drop template builder in ReactJS, streamlining workflow time by 15%.",
                                "Proactively identified issues and proposed solutions during standups, achieving milestones 2 weeks ahead of schedule.",
                                "Contributed to and maintained existing documentation based on user feedback, decreasing onboarding time by 20%.",
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
                        <li key={description} className="mb-2">
                            {description}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground">{description}</p>
            )}
        </div>
    );
}
