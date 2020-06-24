import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';

const Activities = () => {
    return (
        <div>
            <Nav />

            <div className="d-flex" style={{height: '80vh'}}>
                <h1 className="mx-auto my-auto">Activities</h1>
            </div>              

            <hr />
            
            <Section
                src={require("../images/headshot.jpeg")}
                name="Cornell Hyperloop"
                title="Web Developer"
            />

            <hr />

            <Section
                src={require("../images/headshot.jpeg")}
                name="Cornell Current"
                title="Economy Sector Member"
            />

            <hr />

            <Section
                src={require("../images/headshot.jpeg")}
                name="ACSU"
                title="General Member"
            />

            <Footer />
        </div>
    );
};

export default Activities;