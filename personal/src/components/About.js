import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faReact, faPython, faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import { faDatabase} from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import './css/about.css'

export default function About() {
    return (
    <div className="shadow-2xl w-full max-w-10xl w3-container w3-center w3-animate-left w3-animate-opacity" style={{'opacity': 0.9, 'backgroundColor': '#254e58', 'padding': 20}}>
      <h1 className='header text-center'>About Me</h1>
      <div className="shadow-2xl py-24 sm:py-32 z-10 w-full max-w-7xl mx-auto" style={{'borderRadius': 20, 'opacity': 0.9, 'backgroundColor': '#112d32', 'padding': 20}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white" style={{'color': '#88bdbc'}}>
            Technologies 
            
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faReact} size="5x" style={{'color': '#88bdbc'}}/> 
            <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faPython} size="5x" style={{'color': '#88bdbc'}}/> 
            <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faCss3Alt} size="5x" style={{'color': '#88bdbc'}}/> 
            <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faDatabase} size="5x" style={{'color': '#88bdbc'}}/> 
            <FontAwesomeIcon className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" icon={faReact} size="5x" style={{'color': '#88bdbc'}}/> 
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
      </div>
    )
  }
  
