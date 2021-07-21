import React, {useState} from 'react';
import { LoginForm } from '../Components/Forms/loginForm';
import { NavigationBar } from '../Components/Nav/navigationBar';
import {Container} from 'react-bootstrap/'
import { useHistory } from "react-router-dom";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const handleFormSubmit = (e) => {

        const login = {email, password}
        fetch('/login', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(login)
        })
        .then(response => response.json())
        .then(data => {
            if(data["404"] !== undefined){
                alert(data["404"])
            }
            else {
                alert(data["200"])
                history.push('/home')
            }
        })
        e.preventDefault()        
    }


    const handleFormChangeE = (input) => {
        const i = input
        setEmail(i)
    }
    const handleFormChangeP = (input) => {
        const i = input
        setPassword(i)
    }

    return( 
        <Container className="image-login"> 
            <NavigationBar/>
            <LoginForm
                email={email} 
                password={password} 
                onFormSubmit={handleFormSubmit} 
                onFormChangeE={handleFormChangeE}
                onFormChangeP={handleFormChangeP}
            />
        </Container>
    )
}