import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';
import DisplayContent from './DisplayContent';

const Projects = () => {
    const sections = [
        <Section
            src={require("../images/headshot.jpeg")}
            name="Travel Site"
            title="Class Project"
            date="April 2020"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />,
        <Section
            src={require("../images/headshot.jpeg")}
            name="MLB Salary Analysis"
            title="Class Project"
            date="March - April 2020"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            reverse
        />
    ];

    return (
        <div style={{scrollBehavior: 'smooth'}}>
            <Nav />

            <div className="d-flex flex-column" style={{marginBottom: '122px'}}>

                <DisplayContent title="Projects & Research" sections={sections} />
            </div>

            <Footer />
        </div>
    );
};

export default Projects;