import React, {useState} from 'react';
import { NavigationBar } from '../Components/Nav/navigationBar';
import { SignupForm } from '../Components/Forms/signupForm';
import {Container} from 'react-bootstrap/'

export const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmP, setConfirmP] = useState('')



    const handleFormSubmit = (e) => {
        if(password !== confirmP){
            alert("Passwords don't match");
            e.preventDefault()
        }
        else if(password.length < 7){
            alert("Password is too short")
            e.preventDefault()
        }
        else{        
            const signup = {username, email, password}
            fetch('/signup/create', {
                method: 'POST',
                headers: {"Content-type": "application/json; charset=UTF-8"},
                body: JSON.stringify(signup)
            })
            .then(response => response.json())
        }
    }



    const handleFormChangeU = (input) => {
        const i = input
        setUsername(i)
    }
    const handleFormChangeE = (input) => {
        const i = input
        setEmail(i)
    }
    const handleFormChangeP = (input) => {
        const i = input
        setPassword(i)
    }
    const handleFormChangeC = (input) => {
        const i = input
        setConfirmP(i)
    }



    return( 
        <Container className="image-create-account"> 
            <NavigationBar/>
            <SignupForm 
                username={username} 
                email={email} 
                password={password} 
                confirmP={confirmP} 
                onFormSubmit={handleFormSubmit} 
                onFormChangeU={handleFormChangeU}
                onFormChangeE={handleFormChangeE}
                onFormChangeP={handleFormChangeP}
                onFormChangeC={handleFormChangeC}
                />
        </Container>
    )
}