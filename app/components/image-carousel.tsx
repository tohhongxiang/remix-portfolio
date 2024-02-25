import { useState, useEffect } from "react";
import { cn } from "~/lib/utils";
import {
    CarouselApi,
    CarouselContent,
    CarouselPrevious,
    CarouselNext,
    Carousel,
    CarouselItem,
} from "./ui/carousel";

interface ImageCarouselProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}

export default function ImageCarousel({
    children,
    className,
    ...props
}: ImageCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const hasMoreThanOneSlide =
        children instanceof Array && children.length > 1;
    return (
        <div {...props} className={cn(className)}>
            <Carousel
                setApi={setApi}
                opts={{ loop: true, containScroll: "trimSnaps" }}
            >
                <CarouselContent>{children}</CarouselContent>
                {hasMoreThanOneSlide ? (
                    <div
                        className="relative flex items-center justify-center"
                        role="group"
                        aria-roledescription="carousel-controls"
                    >
                        <CarouselPrevious className="relative left-0 right-0 translate-y-0" />
                        <div className="flex items-center justify-center gap-x-4 p-6">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    onClick={() => api?.scrollTo(index)}
                                    className={cn(
                                        "h-4 w-4 rounded-full border-2 border-muted-foreground/50",
                                        index === current - 1 &&
                                            "bg-muted-foreground"
                                    )}
                                    aria-label={`View image ${index + 1} of ${count}`}
                                    key={index}
                                />
                            ))}
                        </div>
                        <CarouselNext className="relative left-0 right-0 translate-y-0" />
                    </div>
                ) : null}
            </Carousel>
        </div>
    );
}

ImageCarousel.Item = CarouselItem;
