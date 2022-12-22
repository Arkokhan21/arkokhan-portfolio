import React from 'react';

const PortfolioDetails = ({ project }) => {

    const { image, title, description, technology, LiveSite, ClientCode, ServerCode } = project

    return (
        <div class="shadow-md shadow-gray-600 rounded-lg">
            <img class="rounded-md duration-200 hover:scale-105 h-[300px]" src={image} alt="" />
            <div class="flex items-center justify-center">
                <h2 className="text-gray-300 font-bold">{title}</h2>
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={LiveSite} target="_blank" rel="noopener noreferrer"> <span className="text-blue-400 hover:underline">Live-Site</span></a>
                </button>
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={ClientCode} target="_blank" rel="noopener noreferrer"> <span className="text-blue-400 hover:underline">Client-Code</span></a>
                </button>
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={ServerCode} target="_blank" rel="noopener noreferrer"> <span className="text-blue-400 hover:underline">Server-Code</span></a>
                </button>
            </div>
            {/* <p className='text-gray-300 mb-5'>{description}</p>
            <p className='text-gray-300'>Technology: {technology}</p> */}
        </div >
    );
};

export default PortfolioDetails;