import React from 'react';
import { Container, Button, Form, Navbar} from 'react-bootstrap/'


export const Search = () => {
    return (
        <div>
            <Navbar className="color-nav" variant="dark">
                <Navbar.Brand href="#home">Pick-a-Book</Navbar.Brand>
                <Container className="form-container">
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-1" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}