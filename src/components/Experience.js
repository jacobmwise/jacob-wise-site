import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';
import DisplayContent from './DisplayContent';

const Experience = () => {
    const sections = [
        <Section
            src={require("../images/headshot.jpeg")}
            name="Hopscotch"
            title="Software Engineering Intern"
            pos="odd"
        />,
        <Section
            src={require("../images/headshot.jpeg")}
            name="INAP"
            title="Consulting Intern"
            pos="even"
        />
    ];
        
    return (
        <div style={{scrollBehavior: 'smooth'}}>
            <Nav />

            <div className="d-flex flex-column" style={{height: '80vh'}}>
                <h1 className="mx-auto my-auto">Professional Experience</h1>

                <div className="d-flex justify-content-center">
                    {/* {scrollButtons} */}
                </div>
            </div>

            <DisplayContent sections={sections} />

            <Footer />
        </div>
    );
};

export default Experience;