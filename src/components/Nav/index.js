import React from 'react';
import './style.css';
import bob from './assets/robstowe.png'; // Remove curly braces around 'bob'

function daNavBar() {
    return (
        <div>
            <navbar href='/'>
            <img src={bob} alt="Rob Stowe logo" className="navbar-logo"/>
            </navbar>
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