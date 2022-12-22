import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black">
            <div>
                <Link to="home" smooth duration={500}><h1 className="text-5xl font-signature ml-2 text-white cursor-pointer">Arko</h1></Link>
                <p className='text-gray-300'>Copyright © 2023 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/arkokhan2022bd/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} className='text-blue-400 hover:scale-125 duration-200' /></a>
                    <a href="https://github.com/Arkokhan21" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className='text-blue-400 ml-5 hover:scale-125 duration-200' /></a>
                    <a href="https://www.facebook.com/arkookhann" target="_blank" rel="noopener noreferrer"><FaFacebook size={40} className='text-blue-400 ml-5 hover:scale-125 duration-200' /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;