import { Link } from "@remix-run/react";
import LightDarkVariant from "~/components/light-dark-variant";
import { useScrollTop } from "~/hooks/use-scroll-top";
import { cn } from "~/lib/utils";

export default function Navbar() {
    const scrolled = useScrollTop();

    return (
        <nav
            className={cn(
                "fixed left-0 top-0 z-10 flex w-full bg-background/80 px-4 py-4 backdrop-blur",
                scrolled && "border-b shadow-sm"
            )}
        >
            <Link to="/" className="flex items-center justify-start gap-2 px-2">
                <LightDarkVariant
                    light={
                        <img
                            src="/images/navbar-logo.png"
                            alt=""
                            className="h-8 w-8 object-contain"
                        />
                    }
                    dark={
                        <img
                            src="/images/navbar-logo-dark.png"
                            alt=""
                            className="h-8 w-8 object-contain" // negative bottom margin to account for height difference
                        />
                    }
                />
                <span className="font-bold">THX</span>
            </Link>
        </nav>
    );
}
