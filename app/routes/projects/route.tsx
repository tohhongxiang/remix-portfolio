import { Outlet } from "@remix-run/react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Projects() {
    return (
        <>
            <Navbar />
            <div className="mt-4">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
