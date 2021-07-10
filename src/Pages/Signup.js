import React from 'react';
// import { LoginForm } from '../Components/Forms/loginForm';
import { Search } from '../Components/Navbar/search';
import {Container} from 'react-bootstrap/'

export const Signup = () => {
    return( 
        <Container className="image-create-account"> 
            <Search/>
            {/* <LoginForm/> */}
        </Container>
    )
}