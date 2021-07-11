import React from 'react';
import { NavigationBar } from '../Components/Nav/navigationBar';
// import { Grid } from '../Components/Cards/grid';  
import {Container, Row, Col, Image} from 'react-bootstrap/'


export const BookInfo = () => {

    // const handleClickChange = (book) => {
    //     console.log(book.id)
    // }

    return( 
        <Container className="image-book"> 
            <NavigationBar/>
            {/* <Row>
                <Col>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" rounded/>
                </Col>
            </Row> */}
        </Container>
    )
}

