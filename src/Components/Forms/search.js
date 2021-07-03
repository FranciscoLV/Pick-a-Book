import React from 'react';
import { Container, Form, Navbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap/'


export const Search = ({userInput, onFormChange, onClickChange}) => {

    const handleChange = (event) => { 
        event.preventDefault()
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleClick = (event) => {
        onClickChange(event)
    }

    return (
        <Navbar fixed="top" className="color-nav" variant="dark">
            <Navbar.Brand href="#home">Pick-a-Book</Navbar.Brand>
            <Container className="form-container">
                <Form inline onSubmit={handleSubmit}>
                    <Form.Control placeholder="Search" className="mr-sm-1" value={userInput} onChange={handleChange} />
                    <ToggleButtonGroup aria-label="Basic example" name="radio" onChange={handleClick}>
                        <ToggleButton variant="secondary" value={"intitle"}>Tittle</ToggleButton>
                        <ToggleButton variant="secondary" value={"inauthor"}>Author</ToggleButton>
                        <ToggleButton variant="secondary" value ={"inpublisher"}>Publisher</ToggleButton>
                    </ToggleButtonGroup>
                </Form>
            </Container>
        </Navbar>
    )
}