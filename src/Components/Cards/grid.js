import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap/'


export const Grid = ({result}) => {

    return (
        <Container>
            <Row> 
                {result.map(book => (
                    <Col key={book.id} >
                    <Card className="card-margin-top" style={{ width: '10rem' }}>  
                            <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}/>  
                            <Card.Body>  
                                <h5 className="card-title">{book.volumeInfo.title}</h5>  
                            </Card.Body>  
                        </Card>  
                    </Col>
                ))}  
            </Row>  
        </Container>
        )
}

