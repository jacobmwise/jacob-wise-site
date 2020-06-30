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
            date="January 2020 - Current"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />,
        <Section
            src={require("../images/headshot.jpeg")}
            name="INAP"
            title="Consulting Intern"
            date="May 2019 - June 2019"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            reverse
        />
    ];

    // const height = document.getElementsByTagName('Nav');
    // console.log(height);
    // console.log(height);
    // console.log(height.__proto__);
        
    return (
        <div style={{scrollBehavior: 'smooth'}}>
            <Nav />

            {/* style={{height: '100vh'}} */}
            <div className="d-flex flex-column" style={{marginBottom: '122px'}}>
                {/* <div className="d-flex h-100">
                    <h1 className="mx-auto my-auto">Professional Experience</h1>
                </div> */}

                <DisplayContent title="Professional Experience" sections={sections} />
            </div>

            <Footer />
        </div>
    );
};

export default Experience;