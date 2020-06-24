import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Section = (props) => {
    
    return (
        <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut" style={{height: '100vh', display: 'flex'}}>
            <img src={props.src} alt={props.name} style={{height: '300px'}} />

            <div>
                <h5>{props.name}</h5>
                <h6>{props.title}</h6>
            </div>
        </ScrollAnimation>
    );
};

export default Section;