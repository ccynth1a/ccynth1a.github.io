import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './components/about-me'
import DeerPic1 from './components/deer-pic-1'
import DeerPic2 from './components/deer-pic-2';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import ContactMe from './components/contact-me';

function App() {
  return (
    <div className="container">
      <AboutMe />
      <DeerPic1 />
      <Education />
      <Experience />
      <DeerPic2 />
      <ContactMe />
      <Projects />
    </div>
  );
}

export default App;
