import React from "react";

import Nav from './subcomponents/Nav';

class DisplayContent extends React.Component {
    onClick = (e) => {
        var element1 = Nav;
        console.log(element1.clientHeight);
        // console.log(Nav);
        var element = document.getElementById(e.target.innerText);
        // element.scrollIntoView({behavior: 'smooth'});
        console.log(element);
        window.scrollTo(57, element.offsetTop - 57);
    };

    render() {
        let scrollButtons = [];
        let showSections = [];

        this.props.sections.forEach(item => {
            showSections.push(<div key={item.props.name}><hr id={item.props.name} />{item}</div>);
            scrollButtons.push(<button onClick={this.onClick} className="mx-1 btn btn-info border border-dark" key={item.props.name} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">{item.props.name}</button>);
        });

        return (
            <div className="text-center">
                <h1 className="h-100">{this.props.title}</h1>

                {scrollButtons}

                {showSections}
            </div>
        );
    }
}

export default DisplayContent;
