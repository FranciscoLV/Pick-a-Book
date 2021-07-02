import React from 'react';
import { Container, Button, Form, Nav } from 'react-bootstrap/'


export const Login = () => {
    return (
        <div>
            <Container className="login-container">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link href="/">Create Account</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="text-center">
                        <Button variant="primary" type="submit">Login</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}