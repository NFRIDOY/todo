import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


export default function Mainlayout() {
    return (
        <div className="">
            <Navbar></Navbar>
            <section className="min-h-[70vh]">
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    )
}
