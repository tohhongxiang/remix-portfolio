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
        <div {...props}>
            <Carousel
                setApi={setApi}
                opts={{ loop: true, containScroll: "trimSnaps" }}
            >
                <CarouselContent>{children}</CarouselContent>
                {hasMoreThanOneSlide ? (
                    <>
                        <CarouselPrevious />
                        <CarouselNext />
                    </>
                ) : null}
            </Carousel>
            {hasMoreThanOneSlide ? (
                <div className="flex items-center justify-center gap-x-2 p-6">
                    {Array.from({ length: count }).map((_, index) => (
                        <div
                            className={cn(
                                "h-2 w-2 rounded-full border-2 border-muted-foreground/50",
                                index === current - 1 && "bg-muted-foreground"
                            )}
                            key={index}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
}

ImageCarousel.Item = CarouselItem;