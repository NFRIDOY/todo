import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


export default function Mainlayout() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
