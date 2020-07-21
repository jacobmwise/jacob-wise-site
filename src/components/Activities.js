import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

import Section from './subcomponents/Section';
import DisplayContent from './DisplayContent';

const Activities = () => {
    const sections = [
        <Section
            src={require("../images/hyperloop.png")}
            name="Cornell Hyperloop"
            title="Web Developer"
            date="2020"
            description="Cornell Hyperloop is a project team dedicated to advancing the development of Hyperloop technology by engineering and 
            programming a pod to compete in the annual SpaceX Hyperloop Challenge. As a WebDev subteam member of the broader Business Development 
            team, I am responsible for maintaining and improving the project team's website in accordance with team and sponsor needs. I work 
            closely with the BizDev subteam to stay informed on relevant business-side updates, and implement any necessary changes with HTML, CSS, and 
            JavaScript programming. Through this experience, especially with the move to remote work during the COVID-19 pandemic, I was often tasked with 
            exploring new JavaScript capacities on my own, and figuring out how to implement features I had never programmed before, such as modal 
            capabilities on the site's Team page. Thus, I have grown a lot professionally with Cornell Hyperloop, both in terms of programming and my 
            understanding of business-side functions. Some of my work can be seen at the team's website <a href='https://hyperloop.cornell.edu/' target='_blank'>here</a>."
        />,
        <Section
            src={require("../images/current.png")}
            name="Cornell Current"
            title="Economy Sector Member"
            date="2020"
            description="As a member of Cornell Current's Ecomony Sector, I present to the organization on pressing current events 
            and relevant industry trends related to economics and its greater impact, as well as write articles on these topics for 
            the organization's website. Each task is done 2-3 times throughout the semester. I also attend weekly club meetings to engage 
            in discussion with the four other sectors: Technology, Science, Politics, and International. Through new member training and my 
            experience with Cornell Current thus far, I believe I have gained the global perspective and analytical skills to properly 
            discuss, comprehend, and investigate current events and their worldy impact, as well as the intersection and overlap of the five sectors."
            reverse
        />,
        <Section
            src={require("../images/acsu.png")}
            name="Association of Computer Science Undergraduates"
            title="General Member"
            date="2019-2020"
            description="ACSU is a general computer science organization aimed at promoting professional, educational, and social opportunities 
            for any and all undergraduates interested in computer science. Through ACSU, I've attended many professional workshops and information 
            sessions, which have provided various opportunities to learn more about industries within the broad spectrum of <q>computer science</q> 
            and discover what I am most interested. ACSU has also become a means of expanding my network within the Cornell CS community and meet 
            students with similar interests and experiences, and has even led to me forming relationships with classmates and joining or supporting 
            certain initiatives across campus, even outside of computer science."
            last
        />
    ];

    return (
        <div>
            <Nav />

            <DisplayContent title="Activities" sections={sections} />

            <Footer />
        </div>
    );
};

export default Activities;