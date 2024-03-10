import { cn } from "~/lib/utils";

export default function BlurryBlob({
    className, // classnames being passed in handles the position and size of the blob
    ...props
}: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) {
    return (
        <div
            {...props}
            className={cn(
                className,
                "-z-10 bg-emerald-200/30 blur-3xl dark:bg-indigo-800/10"
            )}
        />
    );
}
