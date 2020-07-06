import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';
import DisplayContent from './DisplayContent';

const Experience = () => {
    const sections = [
        <Section
            src="https://assets.hs-dev.net/images/hopscotch_logo.png"
            name="Hopscotch"
            title="Software Engineering Intern"
            date="January 2020 - Current"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
            src={require("../images/inap.jpg")}
            name="Camp Schodack"
            title="Group Leader"
            date="Summers 2017-2019"
            description="After attending Camp Schodack as a camper for five summers and a Leadership Trainee for the subsequent two summers, I worked 
            as a counselor for three more. Starting out as a Bunk Counselor, I remained with the same bunk for the duration of my time as a counselor 
            and rose in position to Group Leader status. As a teenager in charge of caring for 14 campers, who grew from ages 9-13 over my time with 
            them, my leadership, patience, and communication skills developed tremendously. Organizing bunk and division events was only part of 
            the job; what I learned the most as I grew up at Schodack is how to balance responsibility, safety, and fun for myself and others. Although 
            it's only a summer camp, I cannot thank Schodack enough for my growth as a student, a professional, and most importantly, a person."
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