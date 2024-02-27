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
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
                <Dialog>
                    <DialogTrigger aria-label="Open image in a modal">
                        <CarouselContent>{children}</CarouselContent>
                    </DialogTrigger>
                    <DialogContent className="max-h-screen max-w-screen-xl">
                        <DialogHeader>
                            <DialogTitle>
                                <span className="sr-only">
                                    Viewing project screenshots:
                                </span>{" "}
                                Slide {current} of {count}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="-ml-4 flex shrink items-center justify-center">
                            {children instanceof Array
                                ? children[current - 1]
                                : children}
                        </div>
                        <DialogFooter className="flex flex-row justify-between space-x-2 sm:justify-end">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => api?.scrollPrev()}
                                aria-label="Go to previous slide"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span className="ml-2 hidden sm:inline">
                                    Previous
                                </span>
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => api?.scrollNext()}
                                aria-label="Go to next slide"
                            >
                                <span className="mr-2 hidden sm:inline">
                                    Next
                                </span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
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
