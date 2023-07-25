import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import {Button, Navbar} from 'react-bootstrap';


function daNavBar() {
    return (
        <div>
                    
                {/* <Container fluid> */}
                    <nav className="parent">
                        <a href='/About' className="navlink" variant='link'>About</a>
                        <a href='/Projects' className="navlink" variant='link'>Projects</a>
                        <a href='/Resume' className="navlink" variant='link'>Resume</a>
                        <a href='/Contact' className="navlink" variant='link'>Contact</a>
                    </nav>
                {/* </Container> */}
        </div>
    )
}

export default daNavBar;