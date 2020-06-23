import React from 'react';

import Header from './subcomponents/Header';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';

const Activities = () => {
    return (
        <div>
            <Header />

            <Section
                name="Cornell Hyperloop"
                title="Web Developer"
            />

            <Footer />
        </div>
    );
};

export default Activities;