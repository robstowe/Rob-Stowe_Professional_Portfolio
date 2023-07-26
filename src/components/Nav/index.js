import React from 'react';
import './style.css';
import Bob from './assets/robstowe.png'



function daNavBar() {
    return (
        <div>

            <nav className="parent">
                <a href='/'>
                    <img src={Bob} href='/' alt="Rob Stowe logo" className="navbar-logo" />
                </a>
                <a href='/About' className="navlink" variant='link'>About</a>
                <a href='/Projects' className="navlink" variant='link'>Projects</a>
                <a href='/Resume' className="navlink" variant='link'>Resume</a>
                <a href='/Contact' className="navlink" variant='link'>Contact</a>
            </nav>
        </div>
    )
}

export default daNavBar;