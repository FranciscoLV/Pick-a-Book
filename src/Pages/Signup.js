import React, {useState} from 'react';
import { NavigationBar } from '../Components/Nav/navigationBar';
import { SignupForm } from '../Components/Forms/signupForm';
import {Container} from 'react-bootstrap/'
import { useHistory } from "react-router-dom";

export const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmP, setConfirmP] = useState('');
    const history = useHistory();



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
            fetch('/signup', {
                method: 'POST',
                headers: {"Content-type": "application/json", "Accept" : "application/json"},
                body: JSON.stringify(signup)
            })
            .then(response => {
                if(response.ok){
                    response.json().then(data => {
                        alert(data.message)
                        history.push('/login')
                    })
                }
                else if(response.status === 401){
                    alert("Sorry, this email is already in use!")
                }
                else if(response.status === 402){
                    alert("Sorry, this username is already in use!")
                }
            })            
            e.preventDefault() 
        }
    }

    // alert("Account created successfully!!")
            
    // history.push('/login') 

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