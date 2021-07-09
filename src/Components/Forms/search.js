import React from 'react';
import { Container, Form, Navbar, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap/'


export const Search = ({userInput, onFormChange, onClickChange}) => {

    const handleChange = (event) => { 
        event.preventDefault()
        onFormChange(event.target.value)
    }

    const handleClick = (event) => {
        // console.log(event.target.value)
        onClickChange(event.target.value)
    }

    return (
        <Navbar fixed="top" className="color-nav" variant="dark">
            <Navbar.Brand href="/">Pick-a-Book</Navbar.Brand>
            <Container className="form-container">
                <Form inline >
                    <Form.Control placeholder="Search" className="mr-sm-1" value={userInput} onChange={handleChange} />
                    <ToggleButtonGroup aria-label="Basic example" name="radio">
                        <ToggleButton variant="outline-secondary" value={"intitle"} onChange={handleClick}>Tittle</ToggleButton>
                        <ToggleButton variant="outline-secondary" value={"inauthor"} onChange={handleClick}>Author</ToggleButton>
                        <ToggleButton variant="outline-secondary" value ={"inpublisher"} onChange={handleClick}>Publisher</ToggleButton>
                    </ToggleButtonGroup>
                </Form>
            </Container>
            <Button variant="secondary">Login/SignUp</Button>
        </Navbar>
    )
}