import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


export default function Mainlayout() {
    return (
        <div className="">
            <Navbar></Navbar>
            <section className="min-h-[calc(100vh-133px)]">
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    )
}
