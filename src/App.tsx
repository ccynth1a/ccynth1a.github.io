import React from 'react';
import './App.css';
import AboutMe from './components/about-me'
import Education from './components/education';
import Skills from './components/skills';
import Bio from './components/bio';
import ContactMe from './components/contact-me';
import Picture from './components/picture';

function App() {
  return (
    <div className="">
      <div className='top'>
        <div className='top-left container'>
            <AboutMe />
        </div>
        <div className='top-right'>
            <Picture classes='deer-pic-1 deer-pic container' src="white-tailed-deer.jpg" alt="A White Tailed Deer Buck"/>
            <Education />
            <Picture classes='deer-pic-2 deer-pic container' src="fallow-deer.jpg" alt="A Fallow Deer Resting" />
            <Skills />
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-left container'>
          <Bio />
        </div>
        <div className='bottom-right container'>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
