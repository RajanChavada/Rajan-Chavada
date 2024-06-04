import { React, useState, useRef, useEffect } from 'react'
import "./App.css"
import Nav from "./components/Nav"
import About from "./components/About"
import Hero from "./components/Hero"
import { useInView } from "react-intersection-observer";

export default function App() {
  const [isVisible, setVisible] = useState(true);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && setVisible(true));
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div>
      <Nav />
      <div id='section-wrapper' className='hero-section'><Hero /></div>
      
      <div id="section-wrapper" ref={domRef} className={`slide-in ${ isVisible ? 'is-visible' : '' } About-Section`}>
        <About />
      </div>


    </div>
  )
}
