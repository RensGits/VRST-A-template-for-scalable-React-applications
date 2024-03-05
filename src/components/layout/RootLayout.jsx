import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function RootLayout() {
    return (
        <div className="root_layout">
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )

}