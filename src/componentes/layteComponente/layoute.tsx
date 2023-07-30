import { Outlet } from "react-router-dom";
import Aside from "../aside/Aside";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layoute() {

    return (
        <>
            <Header />
            <main>
                <Aside id="sidebar-desktop" />
                <section>
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    );
}