import { cn } from "~/lib/utils";

interface LightDarkVariantProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    light: React.ReactNode;
    dark: React.ReactNode;
}

export default function LightDarkVariant({
    light,
    dark,
    ...props
}: LightDarkVariantProps) {
    return (
        <div {...props} className={cn("relative", props.className)}>
            <div className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                {light}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                {dark}
            </div>
        </div>
    );
}
