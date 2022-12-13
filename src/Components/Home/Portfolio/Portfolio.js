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
        <div>
            <h1 className='text-3xl text-center mt-32 mb-10'>My Recent Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-10'>
                {
                    projects.map(project => <PortfolioDetails key={project.id} project={project}></PortfolioDetails>)
                }
            </div>
            <div className='text-center my-10'>
                <Link to='/allprojects'><button className="btn btn-outline btn-primary">More Projects</button></Link>
            </div>
        </div>
    );
};

export default Portfolio;