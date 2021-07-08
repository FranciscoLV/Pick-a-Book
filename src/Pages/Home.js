import React, {useState} from 'react';
import { Search } from '../Components/Forms/search';
import { Grid } from '../Components/Cards/grid';  
import {Container} from 'react-bootstrap/'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

export const Home = () => {

    const [searchBook, setSearchBook] = useState('')
    const [result, setResult] = useState([])
    // const [filter, setFilter] = useState('')

    const handleFormChange = (inputValue) => {
        const book = inputValue;
        // console.log(book)
        // console.log(API_KEY)
        setSearchBook(book)
        if (book){
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + API_KEY + "&maxResults=40")
            // axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inpublisher:keyes&key=" + API_KEY + "&maxResults=40")

            .then(data => {    
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
    

    const handleClickChange = (click) => {
        console.log(click)
    }

    return( 
            <Container className="image"> 
                <Search userInput={searchBook} onFormChange = {handleFormChange} onClickChange={handleClickChange}/>
                <Grid result={result}/>
            </Container>
    )


}