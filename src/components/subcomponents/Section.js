import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {isBrowser} from 'react-device-detect';

const Section = (props) => {

    const des =  {__html: props.description };
    
    let last = "";
    let imgClass = "mx-auto";

    if (isBrowser) {
        last = props.last ? "80vh": "";
        imgClass = "mx-5";
    }

    return (
        <ScrollAnimation
            animateIn='fadeIn'
            duration={3}
            animateOnce={true}
            className={props.reverse ? "d-flex flex-column flex-md-row-reverse w-75 mx-auto my-5 justify-content-around": "d-flex flex-column flex-md-row w-75 mx-auto my-5 justify-content-around" }
            style={{height: last}}
        >
            <img src={props.src} alt={props.name} className={imgClass} style={{height: '300px', width: '300px', objectFit: 'scale-down'}} />

            <div className="text-left mx-auto">
                <h2>{props.name}</h2>
                <h4>{props.title}</h4>
                <h5>{props.date}</h5>

                <p className="col-12" dangerouslySetInnerHTML={ des }></p>
            </div>
        </ScrollAnimation>
    );
};

export default Section;