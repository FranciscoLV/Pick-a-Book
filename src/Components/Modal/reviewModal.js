import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap/'
import ReactStars from "react-rating-stars-component";


export const ReviewModal = (props) => {

    const ratingChange = (newRating) => {
        console.log(newRating);
    }
    

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Write a review for {props.book.volumeInfo !== undefined && props.book.volumeInfo.title !== undefined ? props.book.volumeInfo.title + ' 📖' : 'this book  📖'} 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Chose a rating! ⭐</h4>
                <ReactStars 
                    size={30}
                    value={0}
                    isHalf={true} 
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    onChange={ratingChange}/>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>What did you think about this book?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" onClick={props.onHide} variant="secondary"> Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}