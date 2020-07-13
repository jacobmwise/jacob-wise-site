import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

class Resume extends React.Component {
    render() {
        return (
            <div className="bg-light" style={{height: '100vh'}}>
                <Nav />
                
                <div className="bg-light d-flex flex-column" style={{height: '100vh'}}>
                    
                    <a href="files/resume.pdf" download>
                        Download
                    </a>

                    <img
                        src={require("../images/resume.png")}
                        alt="resume"
                        className="w-50 mx-auto"
                        // style={{width: '50%', height: 'auto', margin: 'auto'}}
                    />
                </div>

                <Footer />
            </div>
        );
    }
}

export default Resume;