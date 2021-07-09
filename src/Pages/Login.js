import React from 'react';
import { LoginForm } from '../Components/Forms/login';
import { Search } from '../Components/Forms/search';
import {Container} from 'react-bootstrap/'

export const Login = () => {
    return( 
        <Container className="image"> 
            <Search/>
            <LoginForm/>
        </Container>
    )
}