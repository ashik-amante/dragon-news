import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navber = () => {
    const {user} = useContext(AuthContext)

    const navlink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Log In</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlink}

                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-9 rounded-full">
                    <img className="rounded-full"
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                {
                    user ? <div>
                        <a className="btn">Sign Out</a>
                    </div> :<a className="btn">LogIN</a>
                }
                
            </div>
        </div>
    );
};

export default Navber;