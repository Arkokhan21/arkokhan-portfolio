import React from 'react';

const AllProjectDetails = ({ project }) => {

    const { image, title, description, technology, LiveSite, ClientCode, ServerCode } = project

    return (
        <div className="card w-[550px]  shadow-xl border-2 border-primary">
            <figure><img className='h-[280px]' src={image} alt="" /></figure>
            <div className="card-body">
                <div className='flex justify-start'>
                    <h2 className="card-title">{title}</h2>
                    <a href={LiveSite} target="_blank" rel="noopener noreferrer"> <button className="btn btn-link">Live-Site</button></a>
                    <a href={ClientCode} target="_blank" rel="noopener noreferrer"> <button className="btn btn-link">Client-Code</button></a>
                    <a href={ServerCode} target="_blank" rel="noopener noreferrer"> <button className="btn btn-link">Server-Code</button></a>
                </div>
                <p>{description}</p>
                <p>Technology: {technology}</p>
            </div>
        </div>
    );
};

export default AllProjectDetails;