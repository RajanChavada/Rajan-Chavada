import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="shadow w-full" style={{ backgroundColor: '#f9f8eb' }}>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-md md:text-center" style={{ color: '#112d32' }}>
                    © 2024 <a href="https://www.linkedin.com/in/rajan-chavada/" target="_blank" className="hover:underline">Rajan Chavada</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className="me-4 md:me-6">
                        <a href="#" className="hover:underline">
                            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#112d32' }} />
                        </a>
                    </li>
                    <li className="me-4 md:me-6">
                        <a href="#" className="hover:underline">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: '#112d32' }} />
                        </a>
                    </li>
                    <li className="me-4 md:me-6">
                        <a href="#" className="hover:underline">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#112d32' }} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#112d32' }} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
