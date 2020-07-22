import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {isBrowser} from 'react-device-detect';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';
import DisplayContent from './DisplayContent';


const Home = () => {
  let secHeight = "";
  let divStyle = "";

  if (isBrowser) {
      secHeight = "75vh";
      divStyle = "10vh";
  }

  const sections = [
    <ScrollAnimation
        name="About Me"
        animateIn='fadeIn'
        duration={3}
        animateOnce={true}
        className="d-flex flex-column flex-md-row"
        style={{height: secHeight}}
    >
      <img src={require("../images/headshot.jpeg")} alt="headshot" className="mx-auto my-auto" style={{height: '300px', width: '300px', objectFit: 'scale-down'}} />
      <p className="mx-auto my-auto col-md-8 text-left">My name is Jacob Wise, and I am a junior at Cornell University originally from the small town of Ardsley in 
        Westchester, NY. Currently, aside from being a student, I am working for a Cornell-based startup called Hopscotch as a software engineer, as 
        highlighted on the Experience page of this site. Although this experience as a full-stack developer leans more towards the React based UI with some 
        emphasis on the Golang server-side, I am very interested in data science as well, and have spent my time and coursework builing a reservoir of 
        languages and skills to perform related tasks. My ultimate goal, after taking more upcoming coursework in analytics and interactive tech, is to use 
        data and development skills to better understand, improve, and build out technologies that positively contribute to our world today.
      </p>
    </ScrollAnimation>,
    <ScrollAnimation
        name="Education"
        animateIn='fadeIn'
        duration={3}
        animateOnce={true}
        className="d-flex flex-column flex-md-row"
        style={{height: secHeight}}
    >
      <div className="col-12 col-md-6" style={{marginTop: divStyle}}>
        <i className="fa fa-graduation-cap fa-5x my-4"></i>
        <h2>Cornell University Class of 2022</h2>
        <ul style={{listStyleType: 'none'}} className="text-left col-12 col-md-8 mx-auto">
          <li>College of Agriculture and Life Sciences</li>
          <li>B.S. in Information Science</li>
          <li>Concentration in Data Science</li>
          <li>Business Minor</li>
        </ul>
      </div>

      <div className="col-12 col-md-6" style={{marginTop: divStyle}}>
        <i className="fa fa-book fa-5x my-4"></i>
        <h2>Relevant Coursework</h2>
        <ul style={{listStyleType: 'none'}} className="text-left col-12 col-md-8 mx-auto">
          <li>INFO 2950: Introduction to Data Science</li>
          <li>INFO 2300: Intermediate Web Programming and Design</li>
          <li>CS 1110: Introduction to Computing Using Python</li>
          <li>CS 2110: Object-Oriented Programming and Data Structures</li>
          <li>AEM 1200: Introduction to Business Management</li>
        </ul>
      </div>
    </ScrollAnimation>,
    <ScrollAnimation
        name="Skills & Interests"
        animateIn='fadeIn'
        duration={3}
        animateOnce={true}
        className="d-flex flex-column flex-md-row"
        style={{height: secHeight}}
    >
      <div className="col-12 col-md-6" style={{marginTop: divStyle}}>
        <i className="fa fa-code fa-5x my-4"></i>
        <h2>Skills & Programming Languages</h2>
        <ul style={{listStyleType: 'none'}} className="text-left col-12 col-md-8 mx-auto">
          <li>Javascript, Python, SQL, Java</li>
          <li>HTML, CSS, PHP</li>
          <li>Experience with React and Bootstrap</li>
          <li>Microsoft Word, Powerpoint, and Excel</li>
        </ul>
      </div>

      <div className="col-12 col-md-6" style={{marginTop: divStyle}}>
        <i className="fa fa-music fa-5x my-4"></i>
        <h2>Other Interests</h2>
        <p className="text-left col-12 col-md-8 mx-auto">In my free time, I like to spend time with my family and friends and enjoy the following: food trucks, traveling, comedy, hip-hop/rap, and NBA 2K</p>
      </div>
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