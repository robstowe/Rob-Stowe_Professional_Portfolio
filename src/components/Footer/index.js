import React from 'react';
import './style.css';
import { Github, Envelope, Linkedin } from 'react-bootstrap-icons'


export default function Footer(){
    return(
        <footer className="footer-container">
            <div className="footer-container">
                <div className="icon-content">
                    <a href="https://www.linkedin.com/in/rob-stowe/" target="blank">
                        <Linkedin />
                    </a>
                    <a href="mailto:robstowe94@gmail.com">
                        <Envelope/>
                    </a>
                    <a href="https://github.com/robstowe" target="blank">
                        <Github />
                    </a>
                </div>
            </div>
        </footer>


    )}