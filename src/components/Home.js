import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';
import DisplayContent from './DisplayContent';


// import Section from './subcomponents/Section';

const Home = () => {
  const sections = [
    <ScrollAnimation
        name="Education"
        animateIn='fadeIn'
        duration={3}
        animateOnce={true}
        style={{height: '100vh'}}
    >
      <h2>Cornell University Class of 2022</h2>
      <h6>B.S. in Information Science</h6>
      <h6>Concentration in Data Science</h6>
      <h6>Business Minor</h6>
    </ScrollAnimation>,
    <ScrollAnimation
        name="Relevant Coursework"
        animateIn='fadeIn'
        duration={3}
        animateOnce={true}
        style={{height: '100vh'}}
    >
      <h2>Relevant Coursework</h2>
      <ul style={{listStyleType: 'none'}}>
        <li>INFO 2950: Introduction to Data Science</li>
        <li>INFO 2300: Intermediate Web Programming and Design</li>
        <li>CS 1110: Introduction to Computing Using Python</li>
        <li>CS 2110: Object-Oriented Programming and Data Structures</li>
        <li>AEM 1200: Introduction to Business Management</li>
      </ul>
    </ScrollAnimation>,
    <ScrollAnimation
        name="Skills & Languages"
        animateIn='fadeIn'
        duration={3}
        animateOnce={true}
        style={{height: '100vh'}}
    >
      <h2>Skills & Programming Languages</h2>
      <ul style={{listStyleType: 'none'}}>
        <li>Proficient in JavaScript, Python, HTML, CSS, PHP, and SQL</li>
        <li>Experience with React and Java</li>
        <li>Microsoft Word, Powerpoint, and Excel</li>
      </ul>
    </ScrollAnimation>,
    <ScrollAnimation
        name="Interests"
        animateIn='fadeIn'
        duration={3}
        animateOnce={true}
        style={{height: '100vh'}}
    >
      <h2>Other Interests</h2>
      <ul style={{listStyleType: 'none'}}>
        <li>Food Trucks</li>
        <li>Word Travel</li>
        <li>Comedy</li>
        <li>Rap/Hip-Hop</li>
      </ul>
    </ScrollAnimation>
  ];

  return (
    <div>
      <Nav />

      <DisplayContent title="Jacob Wise" sections={sections} />
      
      <Footer />
    </div>
  );
};

export default Home;