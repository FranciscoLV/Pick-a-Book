import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap/'


export const Grid = ({result}) => {

    const handleClick = (event) => {
        console.log("hello")
    }

    return (
        <Container fluid className="grid">
            <Row> 
                {result.map(book => (
                    <Col key={book.id} >
                        <Card as="a" border="dark" bg="light" className="card" onClick={handleClick}> 
                            <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}/>  
                            <Card.Body>
                                <Card.Text>
                                    {book.volumeInfo.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>  
                    </Col>
                ))}  
            </Row>  
        </Container>
    )
}

