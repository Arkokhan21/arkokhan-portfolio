import React from 'react';

const PortfolioDetails = ({ project }) => {

    const { image, title, description, technology, LiveSite, ClientCode, ServerCode } = project

    return (
        <div class="shadow-md shadow-gray-600 rounded-lg h-[550px]" data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <img class="rounded-md duration-200 hover:scale-105" src={image} alt="" />
            <div class="flex items-center justify-start my-5">
                <h2 className="text-gray-300 font-bold">{title}</h2>
                <a href={LiveSite} target="_blank" rel="noopener noreferrer"> <span className="text-blue-400 hover:underline duration-200 hover:scale-105 mx-5">Live-Site</span></a>
                <a href={ClientCode} target="_blank" rel="noopener noreferrer"> <span className="text-blue-400 hover:underline duration-200 hover:scale-105">Client-Code</span></a>
                <a href={ServerCode} target="_blank" rel="noopener noreferrer"> <span className="text-blue-400 hover:underline duration-200 hover:scale-105 mx-5">Server-Code</span></a>
            </div>
            <p className='text-gray-300 mb-5'>{description}</p>
            <p className='text-gray-300 mb-3'>Technology: {technology}</p>
        </div>
    );
};

export default PortfolioDetails;