import React from 'react';
import image1 from '../../../assets/images/react.png'
import image2 from '../../../assets/images/web-development.png'
import image3 from '../../../assets/images/web-design.png'

const Skills = () => {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-black pt-[300px] lg:pt-0">
            <div className='py-20 flex justify-center'>
                <p className='text-white text-4xl font-bold inline border-b-4 border-gray-500'>What I Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
                <div class="max-w-md p-6" data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <img className='h-12 w-12 mb-5' src={image1} alt="" />
                    <h5 class="mb-2 text-2xl font-semibold text-white">Front-End Development (React)</h5>
                    <p class="text-gray-300">I specialize in front-end development using React. You can see some of my work below.</p>
                </div>

                <div class="max-w-md p-6" data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <img className='h-12 w-12 mb-5' src={image2} alt="" />
                    <h5 class="mb-2 text-2xl font-semibold text-white">MERN Stack Development</h5>
                    <p class="text-gray-300">I also develop MERN stack web applications. I use MongoDB and Express JS for the database and Node Js for server-side work.</p>
                </div>

                <div class="max-w-md p-6" data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <img className='h-12 w-12 mb-5' src={image3} alt="" />
                    <h5 class="mb-2 text-2xl font-semibold text-white">Web Design</h5>
                    <p class="text-gray-300">I do UI/UX design for the website that helps the website to get a unique look.</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;