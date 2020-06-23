import React from 'react';

class Nav extends React.Component {
    state = {
        url: window.location.pathname
    };

    renderLinks() {

        // var links = [
        //     <a className="nav-item nav-link" href="/">Home <span className="sr-only">(current)</span></a>,
        //     <a className="nav-item nav-link" href="/exp">Professional Experience</a>,
        //     <a className="nav-item nav-link" href="/act">Activities</a>
        // ];

        var links = {"/": "Home", "/exp": "Professional Experience", "/act": "Activities" };

        var tags = [];

        

        for(var key in links) {
            if(key === this.state.url) {
                tags.push(
                    <a href={key} key={key} className="nav-item nav-link active">{links[key]}</a>
                );
            }
            else {
                tags.push(
                    <a href={key} key={key} className="nav-item nav-link">{links[key]}</a>
                );        
            }
            // return(
            //     <a>Home</a>
            // );
        }

        return tags;

    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        {/* <a className="nav-item nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/exp">Professional Experience</a>
                        <a className="nav-item nav-link" href="/act">Activities</a> */}
                        {this.renderLinks()}
                    </div>
                </div>
                    
                    {/* <button><a href="/">Home</a></button>
                    <button><a href="/exp">Professional Experience</a></button>
                    <button><a href="act">Activities</a></button> */}
            </nav>
        );
    }
}

export default Nav;