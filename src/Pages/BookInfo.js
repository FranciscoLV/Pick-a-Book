import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { NavigationBar } from '../Components/Nav/navigationBar';
import { BookInfoTab } from '../Components/Tabs/bookInfoTab';
import {Container} from 'react-bootstrap/';
import {useParams} from "react-router-dom";
const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;


export const BookInfo = () => {

    const {bookId} = useParams()
    const [book, setBook] = useState([])

    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes/" + bookId + "?key=" + API_KEY)
        .then(data => setBook(data.data))
    }, [bookId]);
    
    return(
        <Container className="image-book">
            <NavigationBar/>
            <BookInfoTab book={book}/>
        </Container>
    )
}