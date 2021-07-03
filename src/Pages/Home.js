import React, {useState, useEffect} from 'react';
import { Search } from '../Components/Forms/search';
import { Grid } from '../Components/Cards/grid';  
import {Container} from 'react-bootstrap/'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;
export const Home = () => {

    const [searchBook, setSearchBook] = useState('')
    const [result, setResult] = useState([])

    const handleFormChange = (inputValue) => {
        const book = inputValue;
        // console.log(book)
        // console.log(API_KEY)
        setSearchBook(book)
        if (book){
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + API_KEY + "&maxResults=40")
            .then(data => {
                // console.log(data.data.items);
    
                if (data.data.items){
                    setResult(data.data.items);
                }
                else{
                    setResult([])
                }
            })
        }
        else{
            setResult([])
        }
    }
    
    return( 
        <>
            <Search userInput={searchBook} onFormChange = {handleFormChange}/>
            <Container className="">   {/* className-"App" for background image */}
                <Grid result={result}/>
            </Container>
        </>

  
    )


}