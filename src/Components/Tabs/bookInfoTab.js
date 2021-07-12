import React from 'react';
import { Markup } from 'interweave';
import { Container, Tabs, Tab, Col, Row, Image, Button } from 'react-bootstrap/'


export const BookInfoTab = ({book}) => {

    const handleClick = () =>{
        window.open(book.saleInfo.buyLink, "_blank")
    }
    console.log(book)
    return(
        <Container className="tabs-container">
            <Row>
                <Col sm={3}>
                {/* IF STATMENT FOR THUMBNAIL OR SMALL IMAGE */}
                    <Image src={book.volumeInfo !== undefined && book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} fluid/>
                </Col>
                <Col sm={9}>
                    <Tabs className="tabs" defaultActiveKey="About the book" id="uncontrolled-tab-example" fill justify>
                        <Tab  eventKey="About the book" title="About the book">
                            <Container>
                                <ul className="about-book">
                                    <li>
                                        <Markup content="<b>Title:<b>"/> &nbsp; 
                                        {book.volumeInfo !== undefined && book.volumeInfo.title !== undefined ? book.volumeInfo.title : 'There is no title available for this book!'} 
                                        &nbsp; {book.volumeInfo !== undefined && book.volumeInfo.subtitle !== undefined ? book.volumeInfo.subtitle : ''} 
                                    </li>
                                    <li>
                                    {/* AGREGAR UNA COMA Y UN ESPACIO POR CADA AUTHOR QUE HAY */}
                                        <Markup content="<b>Author(s):<b>"/> &nbsp;
                                        {book.volumeInfo !== undefined && book.volumeInfo.authors !== undefined ? book.volumeInfo.authors: ' '}
                                    </li>
                                    <li>
                                        <Markup content="<b>Page count:<b>"/> &nbsp;
                                        {book.volumeInfo !== undefined && book.volumeInfo.pageCount !== undefined ? book.volumeInfo.pageCount : ' '}
                                    </li>
                                    <li>
                                        <Markup content="<b>Categories:<b>"/> &nbsp;
                                        {book.volumeInfo !== undefined && book.volumeInfo.categories !== undefined ? book.volumeInfo.categories[0] : ' '}
                                    </li>
                                    <li>
                                        <p> 
                                        {/* AGREGAR IF STATEMENT QUE SEA IF PUBLIHSER "PUBLISHED BY " IF PUBLISH DATE "ON 2021" */}
                                            Published by {book.volumeInfo !== undefined && book.volumeInfo.publisher !== undefined ? book.volumeInfo.publisher: ''} on 
                                            &nbsp;{book.volumeInfo !== undefined && book.volumeInfo.publishedDate !== undefined ? book.volumeInfo.publishedDate : ''}
                                        </p>
                                    </li>
                                </ul>
                            </Container>
                        </Tab>
                        <Tab eventKey="Description" title="Description">
                            <Markup content={book.volumeInfo !== undefined && book.volumeInfo.description !== undefined? book.volumeInfo.description : 'There is no description available for this book!'}/>
\                        </Tab>
                        <Tab eventKey="Buy book" title="Buy book">
                            <Container>
                                <ul className="about-book">
                                    <li>
                                        <Markup content="<b>Price:<b>"/> &nbsp;
                                        {book.saleInfo !== undefined && book.saleInfo.listPrice !== undefined && book.saleInfo.listPrice.amount !== undefined ? book.saleInfo.listPrice.amount : 'There is no price available'}
                                        &nbsp;
                                        {book.saleInfo !== undefined && book.saleInfo.listPrice !== undefined && book.saleInfo.listPrice.currencyCode !== undefined ? book.saleInfo.retailPrice.currencyCode : ' '}
                                    </li>
                                    <li>
                                        <Markup content="<b>Availability:<b>"/> &nbsp;
                                        {book.saleInfo !== undefined && book.saleInfo.saleability !== undefined && book.saleInfo.saleability === "FOR_SALE" ? 'Available' : 'Not Available'}
                                    </li>
                                    <li>
                                        <Markup content="<b>E-book:<b>"/> &nbsp;
                                        {book.saleInfo !== undefined && book.saleInfo.isEbook !== undefined && book.saleInfo.isEbook ? 'Available' : 'Not Available'}
                                    </li>
                                </ul>
                                <Button disabled={!(book.saleInfo !== undefined && book.saleInfo.buyLink)} variant="outline-secondary" size="lg" onClick={handleClick}> 
                                    Buy {book.volumeInfo !== undefined && book.volumeInfo.title !== undefined ? book.volumeInfo.title : 'book'}
                                </Button>
                            </Container>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

