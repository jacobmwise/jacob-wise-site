import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';
import DisplayContent from './DisplayContent';

const Activities = () => {
    const sections = [
        <Section
            src={require("../images/headshot.jpeg")}
            name="Cornell Hyperloop"
            title="Web Developer"
            pos="odd"
        />,
        <Section
            src={require("../images/headshot.jpeg")}
            name="Cornell Current"
            title="Economy Sector Member"
            pos="even"
        />,
        <Section
            src={require("../images/headshot.jpeg")}
            name="ACSU"
            title="General Member"
            pos="odd"
        />
    ];

    return (
        <div>
            <Nav />

            <div className="d-flex" style={{height: '80vh'}}>
                <h1 className="mx-auto my-auto">Activities</h1>
            </div>

            <DisplayContent sections={sections} />

            <Footer />
        </div>
    );
};

export default Activities;