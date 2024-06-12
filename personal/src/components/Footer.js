import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Modal from "./Modal"
import "./css/footer.css"

export default function Footer() {
    const [isModalopen, setModalOpen] = useState(false); 

    const closeModal = () => setModalOpen(false); 
    function handleModal() { 
        setModalOpen(true)
        console.log("Clicked");
    }
    return (
        <footer className="shadow w-full" style={{ backgroundColor: '#f9f8eb' }}>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-md md:text-center" style={{ color: '#112d32' }}>
                    © 2024 <a href="https://www.linkedin.com/in/rajan-chavada/" target="_blank" className="hover:underline">Rajan Chavada</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className="me-4 md:me-6">
                        <a href="https://github.com/RajanChavada" target="_blank" className="icon hover:underline">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </li>
                    <li className="me-4 md:me-6">
                        <a href="https://www.linkedin.com/in/rajan-chavada/" target="_blank" className="icon">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                        </a>
                    </li>
                    <li className="me-4 md:me-6">
                        <a href="mailto:rajanchavada111@gmail.com" className="icon hover:underline">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </a>
                    </li>
                    <li>
                        <button onClick={handleModal}>
                            <FontAwesomeIcon icon={faReact} size="2x" />
                        </button>
                        <Modal isOpen={isModalopen} onClose={closeModal}/>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
