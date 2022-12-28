import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioDetails from './PortfolioDetails';

const Portfolio = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("portfolio.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800"
        >
            <div className='p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='my-32 flex justify-center'>
                    <p className='text-white text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
                    {
                        projects.map(project => <PortfolioDetails key={project.id} project={project}></PortfolioDetails>)
                    }
                </div>
                <div className='text-center my-10'>
                    <Link to='/allprojects'>
                        <button className="text-white px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-300">More Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;