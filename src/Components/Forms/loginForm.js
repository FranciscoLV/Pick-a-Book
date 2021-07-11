import React from 'react';
import { Container, Button, Form} from 'react-bootstrap/'


export const LoginForm = () => {
    return (
        <Container className="login-container">
            <Form>
                <h3 className="labels">Login</h3>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="labels">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="labels">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit" variant="dark" block="true"> Login</Button>
                <p className="forgot-password text-right">
                    Don't have an account? <a href="/signup">Create Account</a>
                </p> 
            </Form>
        </Container>
    )
}

