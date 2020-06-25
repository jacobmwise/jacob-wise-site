import React, { useRef } from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';

class Experience extends React.Component {
    state = {
        sections: [
            <Section
                src={require("../images/headshot.jpeg")}
                name="Hopscotch"
                title="Software Engineering Intern"
                pos="odd"
            />,
            <Section
                src={require("../images/headshot.jpeg")}
                name="INAP"
                title="Consulting Intern"
                pos="even"
            />
        ],
        sectionNum: 0
    };

    renderSections() {
        const sections = this.state.sections;

        let rendered = [];
        for(var i=0; i < sections.length; i++) {
            rendered.push(<div><hr id={sections[i].props.name}/>{sections[i]}</div>);
        }
        return rendered;
    }

    onClick = (e) => {
        console.log(e.target);
        // window.scrollTo(0, 500);
        var element = document.getElementById('Hopscotch');
        element.scrollIntoView({behavior: 'smooth'});
    };

    render() {
        
        return (
            <div style={{scrollBehavior: 'smooth'}}>
                <Nav />

                <div className="d-flex flex-column" style={{height: '80vh'}}>
                    <h1 className="mx-auto my-auto">Professional Experience</h1>

                    <div className="d-flex mx-auto">
                        <button onClick={this.onClick}>Hopscotch</button>
                        <button>INAP</button>
                    </div>
                    
                </div>

                {this.renderSections()}
                <h1 id="hi" style={{opacity: '1'}}></h1>

                <Footer />
            </div>
        );
    }
}

export default Experience;