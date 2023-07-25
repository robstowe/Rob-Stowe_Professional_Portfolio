import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-boostrap/Card'
import Letter from './assets/letter.png' //change this to something

import Resume from './rob-stowe-resume.pdf'

function Resume() {
    return (
        <div className='container'>
            <Card>
                <Card.Img variant='top' src={Letter} />
                <Card.Body>
                    <Card.Title>Resume</Card.Title>
                    <Card.Text>
                        Click the link below to download my resume!
                    </Card.Text>
                    <Button href={Resume} download="rob-stowe-resume.pdf" variant="dark">Rob's Resume</Button>
                </Card.Body>
            </Card>
        </div>
    )

}

export default Resume;