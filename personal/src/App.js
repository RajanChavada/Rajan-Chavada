import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects'
import Work from "./components/Work"
import Footer from "./components/Footer"
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <Nav />
      <Element name="heroSection">
        <div className="section-wrapper">
          <Hero />
        </div>
      </Element>
      <Element name="aboutSection">
        <div className="section-wrapper">
          <About />
        </div>
      </Element>
      <Element name='projectsSection'>
        <div className='section-wrapper'>
          <Projects />
        </div>
      </Element>
      <Element name='workSection'>
        <div className='section-wrapper'>
          <Work />
        </div>
      </Element>
      <Element>
        <div className='section-wrapper'>
          <Footer />
        </div>
      </Element>
    </div>
  );
}