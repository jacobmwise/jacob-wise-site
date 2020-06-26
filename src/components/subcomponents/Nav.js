import React from 'react';

class Nav extends React.Component {
    state = {
        url: window.location.pathname
    };

    renderLinks() {

        var links = {"/": "Home", "/exp": "Professional Experience", "/act": "Activities", "/proj": "Projects" };

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
        }

        return tags;

    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-info sticky-top border-bottom border-dark">
                <a className="navbar-brand" href="/">Jacob Wise</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        {this.renderLinks()}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;