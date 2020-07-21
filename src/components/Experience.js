import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';
import DisplayContent from './DisplayContent';

const Experience = () => {
    const sections = [
        <Section
            src={require("../images/hopscotch.png")}
            name="Hopscotch"
            title="Software Engineering Intern"
            date="January 2020 - Current"
            description="At the beginning of 2020, I joined a Cornell-based startup as a software engineer. I became part of a small team responsible for working 
            closely with our CTO to develop a web application MVP for our telehealth pilot program. Using a React-based UI connected to a Golang server, I developed 
            several screens for our webapp, which included user registration and various <q>exercises</q> for the users. As my first real programming work experience, 
            I am very grateful to work for a startup and build out a project from scratch; Hopscotch has given me the opportunity to vastly expand my development and 
            design skills, learn three new languages/libraries in React, Go, and SQL, all while gaining key insight on startup culture by witnessing the business develop 
            firsthand. I have remained with Hopscotch through Summer 2020 and our MVP launch, and have moved on from UI development to unit testing on the client and server side."
        />,
        <Section
            src={require("../images/inap.jpg")}
            name="INAP"
            title="Consulting Intern"
            date="May 2019 - June 2019"
            description="Through the Beacon Fellowship, I worked as a consulting intern for INAP on the Social Network Team, responsible for presenting a 
            solution to improve the institute's online social networking site for Spanish civil servants, <em>INAP Go</em>. My particular role involved streamlining case 
            studies, research, and analysis of best practices in social media design and function in both the private and public sector, as well as 
            casual vs. professional networks. Towards the end of the internship, our team took on a new task: prototyping a redesigned networking site. As 
            an Information Science student interested in UX/UI and interactive technologies, I stepped up to take a leadership role in this aspect. 
            Although <em>INAP Go</em> hasn't changed their interface yet, I believe the institute took many of our suggestions to heart, especially those 
            involving how to market the service internationally to broaden its reach past Spain's borders. This experience was vital to my growth 
            as a business professional and a presenter, and has guided my interest in the intersection of business, tech, and media."
            reverse
        />,
        <Section
            src={require("../images/schodack.png")}
            name="Camp Schodack"
            title="Group Leader"
            date="Summers 2017-2019"
            description="After attending Camp Schodack as a camper for five summers and a Leadership Trainee for the subsequent two summers, I worked 
            as a counselor for three more. Starting out as a Bunk Counselor, I remained with the same bunk for the duration of my time as a counselor 
            and rose in position to Group Leader status. As a teenager in charge of caring for 14 campers, who grew from ages 9-13 over my time with 
            them, my leadership, patience, and communication skills developed tremendously. Organizing bunk and division events was only part of 
            the job; what I learned the most as I grew up at Schodack is how to balance responsibility, safety, and fun for myself and others. Although 
            it's only a summer camp, I cannot thank Schodack enough for my growth as a student, a professional, and most importantly, a person."
            last
        />
    ];
        
    return (
        <div>
            <Nav />

            <DisplayContent title="Professional Experience" sections={sections} />

            <Footer />
        </div>
    );
};

export default Experience;