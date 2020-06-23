import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        name="Hopscotch"
        title="Software Engineering Intern"
        />
      <Footer />
    </div>
  );
}

export default App;
