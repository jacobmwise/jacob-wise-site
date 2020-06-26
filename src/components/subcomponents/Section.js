import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Section = (props) => {
    if(props.pos === "even") {
        var reverse = true;
    }

    return (
        <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut" style={reverse ? {height: '100vh', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-around'} : {height: '100vh', display: 'flex', justifyContent: 'space-around'} }>
            <img src={props.src} alt={props.name} style={{height: '300px'}} />

            <div>
                <h2>{props.name}</h2>
                <h4>{props.title}</h4>
            </div>
        </ScrollAnimation>
    );
};

export default Section;