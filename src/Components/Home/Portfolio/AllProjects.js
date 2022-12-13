import React, { useEffect, useState } from 'react';
import AllProjectDetails from './AllProjectDetails';

const AllProjects = () => {

    const [allProjects, setAllProjects] = useState([])

    useEffect(() => {
        fetch("portfolio.json")
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl text-center mt-32 mb-10'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-10'>
                {
                    allProjects.map(project => <AllProjectDetails key={project.id} project={project}></AllProjectDetails>)
                }
            </div>
        </div>
    );
};

export default AllProjects;