import React, {useState, useEffect} from 'react';
import { Example } from '../Components/Example/example';

export const ExamplePage = () => {

    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    }, [])

    return( 
        <>
            <Example/>
        </>
    )

}