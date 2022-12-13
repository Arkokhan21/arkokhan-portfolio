import React from 'react';
import Lottie from 'react-lottie';
import animation from '../../../assets/animation/computer-programming.json'
import TypeWriterEffect from 'react-typewriter-effect';
import { FaLinkedin, FaGithub, FaFacebook, FaDownload } from "react-icons/fa";

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
        <div className='hero'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Lottie options={defaultOptions}
                    height={400}
                    width={600} />
                <div>
                    <h1 className="text-5xl font-bold mb-5">HI! I'M ARKO KHAN</h1>

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

                    <p className="mt-2">I am an enthusiastic JavaScript developer with knowing some framework for the frontend and the backend. I know Basic PHP and MySQL but basically a MERN developer.</p>

                    <div className='flex mt-5'>
                        <a href="https://www.linkedin.com/in/arkokhan2022bd/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-3xl text-blue-600' /></a>
                        <a href="https://github.com/Arkokhan21" target="_blank" rel="noopener noreferrer"><FaGithub className='text-3xl text-blue-600 ml-5' /></a>
                        <a href="https://www.facebook.com/arkookhann" target="_blank" rel="noopener noreferrer"><FaFacebook className='text-3xl text-blue-600 ml-5' /></a>
                    </div>
                    <div className='flex mt-5'>
                        <button className="btn btn-primary">Contact Me</button>
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