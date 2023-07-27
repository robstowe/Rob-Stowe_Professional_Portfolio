import React from 'react';
import './style.css';
import  Button  from 'react-bootstrap/Button';
import Hold from './assets/pleasehold.jpg' //change this to something

// import Resume from './rob-stowe-resume.pdf'

function Resume() {
    return (
        <div className='container'>
            <p>Click below to download my resume</p>
            <Button href={Hold} download="Resume" className='custom-btn'>Rob's Resume</Button>
            {/* <Card>
                <Card.Img variant='top' src={Letter} />
                <Card.Body>
                    <Card.Title>Resume</Card.Title>
                    <Card.Text>
                        Click the link below to download my resume!
                    </Card.Text>
                    <Button href={Resume} download="rob-stowe-resume.pdf" variant="dark">Rob's Resume</Button>
                </Card.Body>
            </Card> */}
        </div>
    )

}

export default Resume;