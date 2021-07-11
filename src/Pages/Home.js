import React, {useState} from 'react';
import { NavigationBar } from '../Components/Nav/navigationBar';
import { Grid } from '../Components/Cards/grid';  
import {Container} from 'react-bootstrap/'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

export const Home = () => {

    const [searchBook, setSearchBook] = useState('')
    const [result, setResult] = useState([])
    const [filter, setFilter] = useState('')

    const handleFormChange = (inputValue) => {
        const book = inputValue;
        let query = filter
        setSearchBook(book)
        if (query){
            query = '+' + filter +':'
        }
        if (book){
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + query + "&key=" + API_KEY + "&maxResults=40")
            .then(data => {    
                if (data.data.items){
                    // console.log(data.data.items)
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


    const handleClickChange = (bClick) => {
        setFilter(bClick);
        const click = '+' + bClick + ':';
        if (searchBook){
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchBook + click +"&key=" + API_KEY + "&maxResults=40")
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

    return( 
        <Container className="image"> 
            <NavigationBar userInput={searchBook} onFormChange = {handleFormChange} onClickChange={handleClickChange}/>
            <Grid result={result}/>
        </Container>
    )
}