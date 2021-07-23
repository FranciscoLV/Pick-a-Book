import React, { useEffect } from 'react';
import { Container, Form, Navbar, ToggleButtonGroup, ToggleButton, Button, Image} from 'react-bootstrap/'
import { Switch, Route} from "react-router-dom"
import searchIcon from '../../Assets/searchIcon.svg'
import { useHistory } from "react-router-dom";


export const NavigationBar = ({userInput, onFormChange, onClickChange}) => {

    const history = useHistory();


    // useEffect(() => {

    //     const token = localStorage.getItem('jwt-token')

    //     fetch('/protected', {
    //         method: 'GET',
    //         headers: {'Authorization': 'Bearer' + token}
    //     })
    //     .then(response => {
    //         if(response.ok){
    //             response.json();
    //         }
    //         else{
    //             console.log("Missing or invalid token")
    //         }
    //     })
    // }, [])

    const handleChange = (event) => { 
        event.preventDefault()
        onFormChange(event.target.value)
    }

    const handleClick = (event) => {
        // console.log(event.target.value)
        onClickChange(event.target.value)
    }

    const handleSearchClick = () => {
        history.push('/')
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
                    <Image className="search-icon d-inline-block align-top" src={searchIcon} alt='' width="50" height="40" rounded onClick={handleSearchClick}/>
                    <Button href="/signup" variant="secondary">SignUp</Button>
                </Navbar>
            </Route>
            <Route path='/signup'>
                <Navbar fixed="top" className="color-nav" variant="dark">
                    <Navbar.Brand href="/">Pick-a-Book</Navbar.Brand>
                    <Container className="form-container">
                    </Container>
                    <Image className="search-icon d-inline-block align-top" src={searchIcon} alt='' width="50" height="40" rounded onClick={handleSearchClick}/>
                    <Button href="/login" variant="secondary">Login</Button>
                </Navbar>
            </Route>
            <Route path='/:id'>
                <Navbar fixed="top" className="color-nav" variant="dark">
                    <Navbar.Brand  href="/">Pick-a-Book</Navbar.Brand>
                    <Container className="form-container">
                    </Container> 
                    <Image className="search-icon d-inline-block align-top" src={searchIcon} alt='' width="50" height="40" rounded onClick={handleSearchClick}/>
                    <Button href="/login" variant="secondary">Login</Button>
                </Navbar>
            </Route>
        </Switch>
    )
}
