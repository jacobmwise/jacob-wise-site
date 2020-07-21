import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {isBrowser} from 'react-device-detect';

const Section = (props) => {

    const des =  {__html: props.description };
    
    let secHeight = "";
    let imgClass = "mx-auto";
    let divClass = "text-center mx-auto";

    if (isBrowser) {
        secHeight = "75vh"
        imgClass = "mx-5 my-auto";
        divClass = "text-left mx-auto my-auto";
    }

    return (
        <ScrollAnimation
            animateIn='fadeIn'
            duration={3}
            animateOnce={true}
            className={props.reverse ? "d-flex flex-column flex-md-row-reverse w-75 mx-auto justify-content-around": "d-flex flex-column flex-md-row w-75 mx-auto justify-content-around" }
            style={{height: secHeight}}
        >
            <img src={props.src} alt={props.name} className={imgClass} style={{height: '300px', width: '300px', objectFit: 'scale-down'}} />

            <div className={divClass}>
                <h2>{props.name}</h2>
                <h4>{props.title}</h4>
                <h5>{props.date}</h5>

                <p className="col-12 text-left" dangerouslySetInnerHTML={ des }></p>
            </div>
        </ScrollAnimation>
    );
};

export default Section;