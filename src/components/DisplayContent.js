import React from "react";

class DisplayContent extends React.Component {
    onClick = (e) => {
        var element = document.getElementById(e.target.innerText);
        element.scrollIntoView({behavior: 'smooth'});
    };
    render() {
        let scrollButtons = [];
        let showSections = [];

        this.props.sections.forEach(item => {
            showSections.push(<div key={item.props.name}><hr id={item.props.name} style={{marginBottom: '100px'}} />{item}</div>);
            scrollButtons.push(<button onClick={this.onClick} className="mx-1 btn btn-info border border-dark" key={item.props.name}>{item.props.name}</button>);
        });

        return (
            <div className="text-center">
                {scrollButtons}

                {showSections}
            </div>
        );
    }
}

export default DisplayContent;
