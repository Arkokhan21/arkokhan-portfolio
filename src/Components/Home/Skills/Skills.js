import React from 'react';
import frontend from '../../../assets/images/front-end-react.png'
import mern from '../../../assets/images/mern.png'

const Skills = () => {
    return (
        <div>
            <h1 className='text-3xl text-center my-10'>What I Provide</h1>
            <div className='flex'>
                <div className="card w-[600px]  shadow-xl mr-20 border-2 border-primary">
                    <figure className="px-10 pt-10">
                        <img className='h-[250px]' src={frontend} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Front-End Development(React)</h2>
                        <p>I specialize in front-end development using React. You can see some of my work below.</p>
                    </div>
                </div>

                <div className="card w-[600px]  shadow-xl border-2 border-primary">
                    <figure className="px-10 pt-10">
                        <img className='h-[250px]' src={mern} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mern Stack Development</h2>
                        <p>I am a MERN stack web application developer. I use MongoDB and Express JS for the database and Node Js for server side work. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;