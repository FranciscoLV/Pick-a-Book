import React from 'react';
import { Container, Button, Form} from 'react-bootstrap/'


export const SignupForm = () => {
    return (
        <Container className="login-container">
            <form>
                <h3 className="labels">Register</h3>

                <Form.Group>
                    <Form.Label className="labels">First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="labels">Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last name"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="labels">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="labels">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="labels">Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password"/>
                </Form.Group>
                <Button type="submit" variant="dark" block="true">Register</Button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/login">login</a>
                </p>
            </form>
        </Container>
    )
}