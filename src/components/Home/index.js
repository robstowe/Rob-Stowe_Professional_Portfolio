import React from 'react';
import './style.css';
import Typewriter from 'typewriter-effect';
import { Container } from 'react-bootstrap';


export default function Home() {
    return (
        <div className = "content-row">
            <Container className="d-flex justify-content-center align-items-center">
            <div className="text-center typewriter">
                <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(50)
                    .typeString("Hey! I'm Rob. <br>")
                    .pauseFor(1000)
                    .typeString("I am a Full Stack Developer and recent graduate from North Western University. <br>")
                    .pauseFor(1000)
                    .typeString("Take a look around and see some examples of my work.")
                    .pauseFor(1000)
                    .start();
                }}/>
            </div>
            </Container>
        </div>
    );
};

