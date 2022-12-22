import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProjectDetails from './AllProjectDetails';

const AllProjects = () => {

    const [allProjects, setAllProjects] = useState([])

    useEffect(() => {
        fetch("portfolio.json")
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, [])

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 md:h-screen"
        >
            <div className='p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='my-20 flex justify-center'>
                    <p className='text-white text-4xl font-bold inline border-b-4 border-gray-500'>All Projects</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
                    {
                        allProjects.map(project => <AllProjectDetails key={project.id} project={project}></AllProjectDetails>)
                    }
                </div>
                <div className='text-center my-10'>
                    <Link to='/'>
                        <button className="text-white px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-300">
                            Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;