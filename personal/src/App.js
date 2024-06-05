import { React, useState, useRef, useEffect } from 'react'
import "./App.css"
import Nav from "./components/Nav"
import About from "./components/About"
import Hero from "./components/Hero"
import { useInView } from "react-intersection-observer";

export default function App() {

  const aboutRef = useRef(null);


  return (
    <div>
      <Nav />
      <div id='section-wrapper' className='hero-section'><Hero /></div>
      
      <div id="section-wrapper" ref={aboutRef} classname='About-Section'>
        <About />
      </div>


    </div>
  )
}
