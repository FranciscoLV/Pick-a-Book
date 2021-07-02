import React from 'react';
import { Search } from '../Components/Forms/search';

export const Home = () => {

    // const [todo, setTodo] = useState([])

    // useEffect(() => {
    //     fetch('/api').then(response => {
    //         if(response.ok){
    //             return response.json()
    //         }
    //     }).then(data => console.log(data))
    // }, [])

    return( 
        <>
            <Search />
            <div className ="App">
               
            </div>
        </>
    )

}