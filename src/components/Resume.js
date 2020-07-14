import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

class Resume extends React.Component {
    render() {

        return (
            <div className="bg-light">
                <Nav />
                
                <div className="bg-light d-flex flex-column my-5">
                    <img
                        src={require("../images/resume.png")}
                        alt="resume"
                        className="img-fluid rounded mx-auto border border-dark"
                        style={{marginBottom: '100px'}}
                    />
                </div>

                <Footer />
            </div>
        );
    }
}

export default Resume;