import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return(
        <footer className="footer-container">
            <div className="footer-container">
                <div className="icon-content">
                    <a href="https://www.linkedin.com/in/rob-stowe/" target="_blank" rel="nopener no referrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/robstowe" target="_blank" rel="nopener no referrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </footer>


    )}