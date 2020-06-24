import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';

const Projects = () => {
    return (
        <div>
            <Nav />

            <Section
                name="Project"
                title="Project Title"
            />

            <Footer />
        </div>
    );
};

export default Projects;