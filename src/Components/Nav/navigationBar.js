import React from 'react';
import { Container, Form, Navbar, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap/'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


export const NavigationBar = ({userInput, onFormChange, onClickChange}) => {

    const handleChange = (event) => { 
        event.preventDefault()
        onFormChange(event.target.value)
    }

    const handleClick = (event) => {
        // console.log(event.target.value)
        onClickChange(event.target.value)
    }

    return (
        <Switch>
            <Route exact path='/'>
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
                    <Button href="/login" variant="secondary">Login</Button>
                </Navbar>
            </Route>
            <Route path='/login'>
                <Navbar fixed="top" className="color-nav" variant="dark">
                    <Navbar.Brand href="/">Pick-a-Book</Navbar.Brand>
                    <Container className="form-container">
                    </Container> 
                    <Button href="/signup" variant="secondary">SignUp</Button>
                </Navbar>
            </Route>
            <Route path='/signup'>
                <Navbar fixed="top" className="color-nav" variant="dark">
                    <Navbar.Brand href="/">Pick-a-Book</Navbar.Brand>
                    <Container className="form-container">
                    </Container> 
                    <Button href="/login" variant="secondary">Login</Button>
                </Navbar>
            </Route>
            <Route path='/:id'>
                <Navbar fixed="top" className="color-nav" variant="dark">
                    <Navbar.Brand href="/">Pick-a-Book</Navbar.Brand>
                    <Container className="form-container">
                    </Container> 
                    <Button href="/login" variant="secondary">Login</Button>
                </Navbar>
            </Route>
        </Switch>
    )
}

{/* <Router>
    <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path='/signup'>
            <Signup/>
        </Route>
        <Route path='/:id'>
            <BookInfo/>
        </Route>
    </Switch>
</Router> */}