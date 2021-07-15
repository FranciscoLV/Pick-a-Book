import React from 'react';
import { Container, Button, Form} from 'react-bootstrap/'


export const SignupForm = ({onFormSubmit,  email, password, username, confirmP, onFormChangeU, onFormChangeE, onFormChangeP, onFormChangeC}) => {

    
    const handleSubmit = (event) => {
        onFormSubmit(event)
    }
    const handleChangeU = (event) => {
        // event.preventDefault()
        onFormChangeU(event.target.value)
    }
    const handleChangeE = (event) => {
        // event.preventDefault()
        onFormChangeE(event.target.value)
    }
    const handleChangeP = (event) => {
        // event.preventDefault()
        onFormChangeP(event.target.value)
    }
    const handleChangeC = (event) => {
        // event.preventDefault()
        onFormChangeC(event.target.value)
    }


    return (
        <Container className="login-container">
            <form onSubmit={handleSubmit}>

                <h3 className="labels">Register</h3>

                <Form.Group>
                    <Form.Label className="labels">Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" required value={username} onChange={handleChangeU}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="labels">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required value={email} onChange={handleChangeE}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="labels">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" required value={password} onChange={handleChangeP}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="labels">Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" required value={confirmP} onChange={handleChangeC}/>
                </Form.Group>

                <Button type="submit" variant="dark" block="true">Register</Button>
                <p className="forgot-password text-right"> Already registered? <a href="/login">login</a> </p>

            </form>
        </Container>
    )
}