import React from 'react';
import './style.css';



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