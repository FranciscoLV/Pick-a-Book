import React from 'react';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap/'


export const Example = () => {
    return (
        <div >
            <header className="App-header">
                <Container>
                    <Form>
                        <Row>
                            <Col md>
                                <Form.Group controlId="forEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Example@email.com"/>
                                    <Form.Text className="Text-muted">
                                        We will never share your email trust us
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="secondary" type="submit">Login</Button>
                    </Form>
                    <Card className ="mb-3"style={{color: "black"}}>
                        <Card.Img src="https://picsum.photos/id/237/200/50"/>
                        <Card.Body>
                            <Card.Title >
                                Card Example
                            </Card.Title>
                            <Card.Text>
                                This is an example of react bootstrap cards
                            </Card.Text>
                            <Button variant="secondary">Read more</Button>
                        </Card.Body> 
                    </Card> 
                    <Breadcrumb>
                        <Breadcrumb.Item>Test1</Breadcrumb.Item>
                        <Breadcrumb.Item>Test2</Breadcrumb.Item>
                        <Breadcrumb.Item active>Test3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Alert variant="primary">This is a button</Alert>
                    <Button>Test Button</Button>
                </Container>
            </header>
        </div>
    )
}