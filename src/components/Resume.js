import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

class Resume extends React.Component {
  
    render() {
        return (
            <div className="bg-light" style={{height: '100vh'}}>
                <Nav />

                <Footer />
            </div>
        );
    }
}

export default Resume;