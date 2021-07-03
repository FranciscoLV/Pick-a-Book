import React from 'react';
import { Container, Form, Navbar} from 'react-bootstrap/'


export const Search = ({userInput, onFormChange}) => {

    const handleChange = (event) => { 
        event.preventDefault()
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <Navbar className="color-nav" variant="dark">
                <Navbar.Brand href="#home">Pick-a-Book</Navbar.Brand>
                <Container className="form-container">
                    <Form inline onSubmit={handleSubmit}>
                        <Form.Control placeholder="Search" className="mr-sm-1" value={userInput} onChange={handleChange} />
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}