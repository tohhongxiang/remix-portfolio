interface LightDarkVariantProps {
    light: React.ReactNode;
    dark: React.ReactNode;
}

export default function LightDarkVariant({
    light,
    dark,
}: LightDarkVariantProps) {
    return (
        <div className="inline-flex items-center justify-center">
            <div className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                {light}
            </div>
            <div className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                {dark}
            </div>
        </div>
    );
}
