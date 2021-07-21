import React from 'react';
import { Container, Button, Form} from 'react-bootstrap/'

export const LoginForm = ({onFormSubmit, email, password, onFormChangeP, onFormChangeE}) => {

    const handleSubmit = (event) => {
        onFormSubmit(event)
    }
    const handleChangeE = (event) => {
        // event.preventDefault()
        onFormChangeE(event.target.value)
    }
    const handleChangeP = (event) => {
        // event.preventDefault()
        onFormChangeP(event.target.value)
    }


    return (
        <Container className="login-container">
            <Form onSubmit={handleSubmit}>
                <h3 className="labels">Login</h3>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="labels">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required value={email} onChange={handleChangeE}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="labels">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"required value={password} onChange={handleChangeP} />
                </Form.Group>

                <Button type="submit" variant="dark" block="true"> Login</Button>

                <p className="forgot-password text-right">
                    Don't have an account? <a href="/signup">Create Account</a>
                </p> 
            </Form>
        </Container>
    )
}

