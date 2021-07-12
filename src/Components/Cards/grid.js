import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap/'
import {Link} from "react-router-dom";


export const Grid = ({result}) => {
    return (
        <Container fluid className="grid">
            <Row> 
                {result.map(book => (
                    <Col key={book.id}>
                        <Card border="dark" bg="light" className="card">
                            <Link to={`/${book.id}`}>
                            <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}/>  
                            <Card.Body>
                                <Card.Text>
                                    {book.volumeInfo.title}
                                </Card.Text>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))}  
            </Row>  
        </Container>
    )
}