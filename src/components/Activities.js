import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';

const Activities = () => {
    return (
        <div>
            <Nav />

            <Section
                name="Cornell Hyperloop"
                title="Web Developer"
            />

            <Footer />
        </div>
    );
};

export default Activities;