import React from 'react';
// import { LoginForm } from '../Components/Forms/loginForm';
import { Search } from '../Components/Navbar/search';
import { SignupForm } from '../Components/Forms/signupForm';
import {Container} from 'react-bootstrap/'

export const Signup = () => {
    return( 
        <Container className="image-create-account"> 
            <Search/>
            <SignupForm/>
        </Container>
    )
}