import React from 'react';
import { Container, Form, Navbar} from 'react-bootstrap/'


export const Search = ({userInput, onFormChange}) => {

    const handleChange = (event) => { 
        event.preventDefault()
        onFormChange(event.target.value)
    }

    return (
        <div>
            <Navbar className="color-nav" variant="dark">
                <Navbar.Brand href="#home">Pick-a-Book</Navbar.Brand>
                <Container className="form-container">
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-1" value={userInput} onChange={handleChange}/>
                        {/* <Button variant="outline-info">Search</Button> */}
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}