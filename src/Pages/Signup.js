import React from 'react';
import { NavigationBar } from '../Components/Nav/navigationBar';
import { SignupForm } from '../Components/Forms/signupForm';
import {Container} from 'react-bootstrap/'

export const Signup = () => {
    return( 
        <Container className="image-create-account"> 
            <NavigationBar/>
            <SignupForm/>
        </Container>
    )
}