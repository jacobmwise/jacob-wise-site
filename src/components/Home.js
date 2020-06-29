import React from 'react';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';
import DisplayContent from './DisplayContent';


// import Section from './subcomponents/Section';

const Home = () => {
  const sections = [
    <div name="Education">
      <h5>B.S. in Information Science</h5>
      <h6>Concentration in Data Science</h6>
      <h6>Business Minor</h6>
    </div>,
    <div name="Relevant Coursework">
      <h2>Relevant Coursework</h2>
      <ul>
        <li>INFO 2950: Introduction to Data Science</li>
        <li>INFO 2300: Intermediate Web Programming and Design</li>
        <li>CS 1110</li>
        <li>CS 2110</li>
        <li>AEM</li>
      </ul>
    </div>
  ];

  return (
    <div>
      <Nav />


      <div className="d-flex flex-column text-center" style={{height: '70vh'}}>
        <div className="my-auto">
          <h1>Jacob Wise</h1>
          <h2>Student at Cornell University</h2>
        </div>
      </div>

      <DisplayContent sections={sections} />
      
      <Footer />
    </div>
  );
};

export default Home;