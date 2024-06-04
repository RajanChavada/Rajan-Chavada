import React from 'react';
import './css/hero.css';
import Typewriter from 'typewriter-effect';
import backgroundImage from "./images/background.png";
import objects from './images/objects4.png';

export default function Hero() {
    return (
        <div className='hero-wrapper'>
            <div className='image'>
                <img src={backgroundImage} alt='background' className='background-image' />

            </div>
            <div className='name'>
                <Typewriter
                    options={{
                        strings: ['Hi! My name is', 'Rajan!'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    );
}
