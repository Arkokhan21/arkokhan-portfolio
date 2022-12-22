import React from 'react';
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/computer-programming.json'
import TypeWriterEffect from 'react-typewriter-effect';
import { FaLinkedin, FaGithub, FaFacebook, FaDownload, FaAngleRight } from "react-icons/fa";
import { Link } from "react-scroll";

const About = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row-reverse">
                <div>
                    <Lottie options={defaultOptions}
                        height={400}
                        width={400} />
                </div>
                <div>
                    <h1 className="text-5xl font-bold mb-5 text-white">HI! I'M ARKO KHAN</h1>

                    <TypeWriterEffect
                        textStyle={{
                            color: '#FFFFFF',
                            fontWeight: 500,
                            fontSize: '1.5em',
                        }}
                        cursorColor="#FFFFFF"
                        multiText={[
                            'Front-End Developer',
                            'Mern Stack Developer',
                            'React Developer',
                            'Web Developer',
                            'Programmer',
                        ]}
                        multiTextDelay={2000}
                        typeSpeed={50}
                        multiTextLoop
                    />

                    <p className="mt-2 text-gray-300">
                        I am an enthusiastic Web Application Developer. I love to work on web applications using technologies like React, Tailwind, DaisyUI, and MongoDB.
                    </p>

                    <div className='flex mt-5'>
                        <a href="https://www.linkedin.com/in/arkokhan2022bd/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} className='text-blue-400 hover:scale-125 duration-200' /></a>
                        <a href="https://github.com/Arkokhan21" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className='text-blue-400 ml-5 hover:scale-125 duration-200' /></a>
                        <a href="https://www.facebook.com/arkookhann" target="_blank" rel="noopener noreferrer"><FaFacebook size={40} className='text-blue-400 ml-5 hover:scale-125 duration-200' /></a>
                    </div>
                    <div className='flex mt-5'>
                        <button>
                            <Link
                                to="portfolio"
                                smooth
                                duration={500}
                                className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
                            >
                                Portfolio
                                <span className="group-hover:rotate-90 duration-300">
                                    <FaAngleRight size={25} className="ml-1" />
                                </span>
                            </Link>
                        </button>
                        <a href="arkoKhanResume.pdf"
                            download="arkoKhanResume.pdf">
                            <button className="btn btn-primary ml-10">My Resume <FaDownload className='ml-2' /></button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;