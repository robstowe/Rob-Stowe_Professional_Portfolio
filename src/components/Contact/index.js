import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './style.css'

export default function Contact() {
    const [validationError, setValidationError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
        setValidationError('');
    };

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setValidationError('');
    };

    const handleMessage = (e) => {
        const value = e.target.value;
        setMessage(value);
        setValidationError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameValid = name.length >= 8;
        const emailValid = validateEmail(email);
        const messageValid = message.length >= 15;

        if (!nameValid) {
            setValidationError('Please provide atleast your first name and last initial, minimum 8 characters')
        } else if (!emailValid) {
            setValidationError('Please provide a valid email address')
        } else if (!messageValid) {
            setValidationError('Please send a message with atleast 15 characters')
        } else {
            alert('Thank you for your message! I will be reaching out to you soon.');
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    const validateEmail = (email) => {
        const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexPattern.test(email);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group
                            className="mb-3"
                            style={{ fontSize: '25px' }}
                            controlId="exampleForm.ControlInput1">
                            <Form.Label>What's your name?</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First and Last name/initial"
                                value={name}
                                onChange={handleName}
                                isValid={name.length >= 8}
                                isInvalid={validationError !== '' && name.length < 8}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {validationError}
                            </Form.Control.Feedback>  
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            style={{ fontSize: '25px' }}
                            controlId="exampleForm.ControlInput1">
                            <Form.Label>What's your name?</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="blank@mail.com"
                                value={email}
                                onChange={handleEmail}
                                isValid={validateEmail(email)}
                                isInvalid={validationError !== '' && !validateEmail(email)}/>
                            <Form.Control.Feedback type='invalid'>
                                {validationError}
                            </Form.Control.Feedback>    
                        </Form.Group>
                        
                        <Form.Group
                            className="mb-3"
                            style={{ fontSize: '25px' }}
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Leave me a message here</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={message}
                                onChange={handleMessage}
                                isValid={message.length >= 15}
                                isInvalid={validationError !== '' && message.length < 15} />
                            <Form.Control.Feedback type='invalid'>
                                {validationError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type='submit' className='custom-btn'>Submit Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}