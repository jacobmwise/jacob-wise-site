import React from 'react';

import Nav from './Nav';

const Header = () => {
    return (
        <div className="bg-info d-flex sticky-top">
            <h1>Jacob Wise</h1>

            <img src={require('../../images/headshot.jpeg')} alt="headshot" style={{height: '200px'}}/>

            <Nav />
        </div>
    );
};

export default Header;