import { Outlet } from "@remix-run/react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Projects() {
    return (
        <>
            <Navbar />
            <div className="flex h-full flex-col pt-16">
                <div className="flex-1">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
}
