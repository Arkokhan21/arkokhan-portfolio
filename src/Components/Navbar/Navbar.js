import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "portfolio",
        },
        {
            id: 3,
            link: "skills",
        },
        {
            id: 4,
            link: "contact",
        },
    ];

    return (
        <div className="navbar flex lg:justify-around bg-black fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars size={20} />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-black rounded-box w-52">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 capitalize font-medium text-gray-300 hover:scale-105 duration-200"
                            >
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to="home" smooth duration={500}><h1 className="text-5xl font-signature ml-2 text-white cursor-pointer">Arko</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 hover:scale-105 duration-200 text-gray-300">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 capitalize font-medium text-gray-300 hover:scale-105 duration-200"
                        >
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
