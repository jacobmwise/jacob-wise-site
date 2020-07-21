import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';
import DisplayContent from './DisplayContent';

const Projects = () => {
    const sections = [
        <Section
            src={require("../images/travel.png")}
            name="Travel Site"
            title="Class Project"
            date="April 2020"
            description="For my final project in INFO 2300: Intermediate Design and Programming for the Web, I made a travel site image gallery. The site was 
            developed using PHP, which allowed me to build on the HTML and CSS knowledge previously gained from coursework with added functionality, 
            such as image filtering, image tags, and form components. Using SQL, I connected to an SQLite development database and retrieved info related to each 
            image on the site. The database is also updated upon image addition/deletion.<br/><br/> A link to my site can be found 
            <a href='https://wise-travel.herokuapp.com/' target='_blank'>here</a>. It is designed for desktop use only."
        />,
        <Section
            src={require("../images/mlb.png")}
            name="MLB Salary Analysis"
            title="Class Project"
            date="March - April 2020"
            description="My final project prompt for INFO 2950: Introduction to Data Science was pretty open ended; we were required to use our knowledge from 
            throughout the semester to analyze and answer a research question to our greatest ability. My group decided to use MLB statistics to answer the following: 
            what factors and statistics lead MLB hitters to receive higher salaries?<br /><br />You can access the project <a href='https://github.com/jacobmwise/mlb_salary_analysis' target='_blank'>here</a>."
            reverse
            last
        />
    ];

    return (
        <div>
            <Nav />

            <DisplayContent title="Projects & Research" sections={sections} />

            <Footer />
        </div>
    );
};

export default Projects;