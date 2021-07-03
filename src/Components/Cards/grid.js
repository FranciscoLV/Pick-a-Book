import React from 'react';
import {Card} from 'react-bootstrap/'


export const Grid = ({result}) => {

    return (
        <div className="container">  
            <div className="row">  
                {result.map(book => (
                    <div key={book.id} className="col-sm-2">  
                        <Card className="card-margin-top">  
                            <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
                            <Card.Body>  
                                <h5 className="card-title">Card title</h5>  
                            </Card.Body>  
                        </Card>  
                    </div>  
                ))}  
            </div>  
        </div> 
        )
}

