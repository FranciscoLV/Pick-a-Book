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
        .then(response => {
            if(response.ok){
                response.json().then(data => {
                    alert(data.message)
                    console.log(data.token)
                    localStorage.setItem("jwt-token", data.token)
                    history.push("/")
                })
            }
            else if(response.status === 401){
                alert("Account does not exist!")
            }
            else if(response.status === 402){
                alert("Incorrect password")
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