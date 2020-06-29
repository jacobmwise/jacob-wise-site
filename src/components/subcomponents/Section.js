import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Section = (props) => {
    return (
        <ScrollAnimation
            animateIn='fadeIn'
            animateOut="fadeOut"
            className={props.reverse ? "d-flex flex-column flex-md-row-reverse w-75 mx-auto justify-content-around": "d-flex flex-column flex-md-row w-75 mx-auto justify-content-around" }
            style={{height: '100vh'}}
        >
            <img src={props.src} alt={props.name} style={{height: '300px', width: '300px'}} />

            <div className="text-left">
                <h2>{props.name}</h2>
                <h4>{props.title}</h4>
                <h5>{props.date}</h5>

                <p className="w-50">{props.description}</p>
            </div>
        </ScrollAnimation>
    );
};

export default Section;