import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col, Row, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

//This is the navigation bar
import Header from '../Home/Header';
import '../Home/Header.css';


class PrivacySettings extends Component {
    render() {
        
        return (
            <div className="PrivacySettings main">
                <Header />
                <Row>
                    <Col xs="6" sm="4">
                    <ListGroup>
                    <ListGroupItem color='secondary' tag="button" action><a href="/account" style={{color: 'black', textDecoration: 'none'}}>Account Settings</a></ListGroupItem>
                    <ListGroupItem color='secondary' tag="button" active action> <a href="/privacysettings" style={{color: 'white', textDecoration: 'none'}}>Privacy Settings</a></ListGroupItem>
                    </ListGroup>
                    </Col>
                    <Col xs="6" sm="8">
                        <h1>  Map Settings </h1>
                        <Card outline >
                            <CardBody>
                            <Form>
                            <FormGroup>
                                <Label for="privacyMap">Privacy of Map</Label>
                                <FormText>How many people should get a hold of your unique map</FormText>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>All</option>
                                    <option>Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="privacyMap">Privacy of Map</Label>
                                <FormText>How many of your unque maps should a someone you shared with have</FormText>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>All</option>
                                    <option>Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="privacyMap">Map Sharing</Label>
                                <FormText>Can friends share your unique map with others</FormText>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>yes</option>
                                    <option>no</option>
                                </Input>
                            </FormGroup>
                            </Form>
                            </CardBody>
                          
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PrivacySettings;