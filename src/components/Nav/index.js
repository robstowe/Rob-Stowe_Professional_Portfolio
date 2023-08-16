import React from 'react';
import './style.css';
import Bob from './assets/robstowe.png'
import { Link } from 'react-router-dom'



function daNavBar() {
    return (
        <div>
            <nav className="parent">
                <Link to='/'>
                    <img src={Bob} alt="Rob Stowe logo" className="navbar-logo" />
                </Link>
                <div className="navlink-group">
                    <Link to='/About' className="navlink">About</Link>
                    <Link to='/Projects' className="navlink">Projects</Link>
                    <Link to='/Resume' className="navlink">Resume</Link>
                    <Link to='/Contact' className="navlink">Contact</Link>
                </div>
            </nav>
        </div>
    );
}

export default daNavBar;