import { React, useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBrain } from "@fortawesome/free-solid-svg-icons";
import headshot from "./images/headshot.JPG";
import './css/about.css';

export default function About() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const [isAboutIntersecting, setIsAboutIntersecting] = useState(false);
  const [isTechIntersecting, setIsTechIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target === aboutRef.current) {
          setIsAboutIntersecting(entry.isIntersecting);
        }
        if (entry.target === techRef.current) {
          setIsTechIntersecting(entry.isIntersecting);
        }
      },
      { rootMargin: "0px" }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (techRef.current) {
        observer.unobserve(techRef.current);
      }
    };
  }, []);

  return (
    <main>
      <div className="shadow-2xl w-full max-w-10xl w3-container w3-center w3-animate-left w3-animate-opacity" style={{ opacity: 0.9, backgroundColor: '#254e58', padding: 100 }}>
        <h1 className='header text-center'>About Me</h1>

        <div
          ref={aboutRef}
          className={`aboutme shadow-2xl py-24 sm:py-32 z-10 w-full max-w-7xl mx-auto ${isAboutIntersecting ? 'slide-in' : ''}`}
          style={{ borderRadius: 20, opacity: 0.9, backgroundColor: '#112d32', padding: 20 }}
        >
          <div className='about-content'>
            <img src={headshot} alt='Rajan Headshot' className='headshot' />
            <div className='text-content'>
              <p>Hello! My name is Rajan Chavada, and I am a Computer Science student studying at the University of Western Ontario.</p>
              <p>I am a passionate tech geek, and software developer. I've worked 8 Months at RBC Capital Markets as a software developer intern,
                and have had the chance to meet a lot of cool people, and make enterprise software.
              </p>
              <p>I am most experienced in both front end and back end technologies with experience using React.js, SQL and Flask frameworks. I am currently learning
                Datascience for machine learning, and plan to continue my education in this field!
              </p>
            </div>
          </div>
        </div>

        <div
          ref={techRef}
          className={`technologies shadow-2xl py-24 sm:py-32 z-10 w-full max-w-7xl mx-auto ${isTechIntersecting ? 'slide-in' : ''}`}
          style={{ borderRadius: 20, opacity: 0.9, backgroundColor: '#112d32', padding: 20 }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-white" style={{ color: '#88bdbc' }}>
              Technologies
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <div className='tech'>
                <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faReact} size="5x" style={{ color: '#88bdbc' }} />
                <p>React</p>
              </div>

              <div className='tech'>
                <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faPython} size="5x" style={{ color: '#88bdbc' }} />
                <p>Python Lib</p>
              </div>

              <div className='tech'>
                <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faCss3Alt} size="5x" style={{ color: '#88bdbc' }} />
                <p>CSS</p>
              </div>

              <div className='tech'>
                <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faDatabase} size="5x" style={{ color: '#88bdbc' }} />
                <p>SQL</p>
              </div>

              <div className='tech'>
                <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faBrain} size="5x" style={{ color: '#88bdbc' }} />
                <p>Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
