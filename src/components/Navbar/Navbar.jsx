import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                        <h1 className="font-black text-3xl uppercase">T <span className="text-red-500">o D </span>o</h1>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        <li>
                            <Link to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/addTask"}>
                                Add Task
                            </Link>
                        </li>
                        <li>
                            <Link to={"/Registration"}>
                                Registration
                            </Link>
                        </li>
                        <li>
                            <Link to={"/Login"}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to={"/login"}>
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/addTask"}>
                            Add Task
                        </Link>
                    </li>
                    <li>
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-red-500">Logout</a>
            </div> */}
        </div>
    )
}
