import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className="max-w-[1200px] m-auto">
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;