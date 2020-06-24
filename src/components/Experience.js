import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';

class Experience extends React.Component {
    render() {
        return (
            <div>
                <Nav />

                <div className="d-flex" style={{height: '80vh'}}>
                    <h1 className="mx-auto my-auto">Professional Experience</h1>
                </div>

                <hr />

                <Section
                    src={require("../images/headshot.jpeg")}
                    name="Hopscotch"
                    title="Software Engineering Intern"
                />

                <hr />

                <Section
                    src={require("../images/headshot.jpeg")}
                    name="INAP"
                    title="Consulting Intern"
                />

                <Footer />
            </div>
        );
    }
}

export default Experience;