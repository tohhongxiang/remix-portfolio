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
                            start="May"
                            end="Dec 2022"
                            description={
                                "Collaborated with multiple teams to enhance deployment monitoring capabilities, providing real-time insights and visualizations to facilitate quick analysis and informed decision-making. Contributed significantly to improve A/B testing workflows with comprehensive dashboard visualisations to accelerate business decisions which impact millions of customers daily."
                            }
                        />
                    </li>
                    <li>
                        <ExperienceCard
                            title="Software Engineer"
                            company="Industrial Electronics Pte Ltd"
                            start="Dec 2019"
                            end="July 2020"
                            description={
                                "Engineered and implemented innovative features for a React and GraphQL E-commerce application to facilitate warehouse stock tracking and trading functionalities. Pioneered a streamlined workflow for content writers by developing a user-friendly drag-and-drop template builder in React. Delivered an exceptional user experience through the implementation of a results-driven UI, consistently achieving project milestones ahead of schedule."
                            }
                        />
                    </li>
                </ul>
                <div className="px-3">
                    <Button asChild className="group">
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
    description: string;
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
            <h2 className="text-medium font-semibold">
                {title} - {company}
            </h2>
            <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
    );
}
