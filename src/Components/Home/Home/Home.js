import React from 'react';
import Tools from '../../Tools/Tools';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Tools></Tools>
            <Contact></Contact>
        </div>
    );
};

export default Home;