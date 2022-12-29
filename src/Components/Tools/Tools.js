import React from 'react';

import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import tailwind from "../../assets/images/tailwind.png";
import bootstrap from "../../assets/images/Bootstrap.png";
import javascript from "../../assets/images/javascript.png";
import reactImage from "../../assets/images/react.png";
import nodejs from "../../assets/images/node.png";
import nextjs from "../../assets/images/nextjs.png";
import github from "../../assets/images/github.png";

const Tools = () => {
    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 4,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-violet-700",
        },
        {
            id: 5,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 6,
            src: reactImage,
            title: "React",
            style: "shadow-sky-400",
        },
        {
            id: 7,
            src: nodejs,
            title: "Node JS",
            style: "shadow-lime-500",
        },
        {
            id: 8,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white",
        },

        {
            id: 9,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
    ];

    return (
        <div
            name="skills"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-[350px] lg:pt-0"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className='my-20 flex justify-center'>
                    <p className='text-white text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {skills.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4 text-white">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tools;