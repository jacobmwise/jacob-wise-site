import React from "react";

import Nav from './subcomponents/Nav';

class DisplayContent extends React.Component {
    onClick = (e) => {
        var element1 = Nav;
        console.log(element1.clientHeight);
        // console.log(Nav);
        var element = document.getElementById(e.target.innerText);
        // element.scrollIntoView({behavior: 'smooth'});
        window.scrollTo(50, element.offsetTop);
    };

    render() {
        let scrollButtons = [];
        let showSections = [];

        this.props.sections.forEach(item => {
            showSections.push(<div key={item.props.name}><hr id={item.props.name} />{item}</div>);
            scrollButtons.push(<button onClick={this.onClick} className="mx-1 btn btn-info border border-dark" key={item.props.name}>{item.props.name}</button>);
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
