import React from 'react';

const Section = (props) => {
    return (
        <div>
            <h5>{props.name}</h5>

            <h6>{props.title}</h6>
        </div>
    );
};

export default Section;