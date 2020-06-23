import React from 'react';

const Header = () => {
    return (
        <div className="bg-info">
            <h1>Jacob Wise</h1>

            <img src={require('../images/headshot.jpeg')} alt="headshot" />

            <nav>
                <button>Home</button>
                <button>Professional Experience</button>
                <button>Activities</button>
            </nav>
        </div>
    );
};

export default Header;