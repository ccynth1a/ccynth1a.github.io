import React from 'react';
import './App.css';
import AboutMe from './components/about-me'
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import ContactMe from './components/contact-me';
import Picture from './components/picture';

function App() {
  return (
    <div className="container">
      <AboutMe />
      <Picture src="white-tailed-deer.jpg" alt="A White Tailed Deer Buck" position="deer-pic-1" />
      <Education />
      <Experience />
      <Picture src="fallow-deer.jpg" alt="A Fallow Buck Resting on the Grass" position="deer-pic-2"/>
      <ContactMe />
      <Projects />
    </div>
  );
}

export default App;
