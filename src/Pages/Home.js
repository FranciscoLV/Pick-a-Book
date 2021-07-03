import React, {useState} from 'react';
import { Search } from '../Components/Forms/search';

export const Home = () => {

    const [searchBook, setSearchBook] = useState('')

    const handleFormChange = (inputValue) => {
        console.log(inputValue)
        setSearchBook(inputValue)
    }

    return( 
        <>
            <Search userInput={searchBook} onFormChange = {handleFormChange}/>
            <div className ="App" /> 
        </>
    )

}