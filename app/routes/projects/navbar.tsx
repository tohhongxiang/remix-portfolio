import { Link } from "@remix-run/react";
import LightDarkVariant from "~/components/light-dark-variant";

export default function Navbar() {
    return (
        <nav className="fixed left-0 top-0 z-10 w-full bg-background/80 px-4 py-4 backdrop-blur">
            <Link to="/" className="flex items-center justify-start gap-2">
                <LightDarkVariant
                    light={
                        <img
                            src="/images/hero.png"
                            alt=""
                            className="h-auto w-8"
                        />
                    }
                    dark={
                        <img
                            src="/images/hero-dark.png"
                            alt=""
                            className="h-auto w-8" // negative bottom margin to account for height difference
                        />
                    }
                />
                <p className="font-bold">THX</p>
            </Link>
        </nav>
    );
}
