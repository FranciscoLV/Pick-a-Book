import React from 'react';
import { LoginForm } from '../Components/Forms/loginForm';
import { NavigationBar } from '../Components/Nav/navigationBar';
import {Container} from 'react-bootstrap/'

export const Login = () => {
    return( 
        <Container className="image-login"> 
            <NavigationBar/>
            <LoginForm/>
        </Container>
    )
}