import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col, Row, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

//This is the navigation bar
import Header from '../Home/Header';
import '../Home/Header.css';


class AccountSettings extends Component {
    render() {
        return (
            <div className="AccountSettings main">
                <Header />
                <Row>
                    <Col xs="6" sm="4">
                    <ListGroup>
                    <ListGroupItem color='secondary' active tag="button" action><a href="/account" style={{color: 'white', textDecoration: 'none'}}>Account Settings</a></ListGroupItem>
                    <ListGroupItem tag="button" action><a href="/privacysettings" style={{color: 'black', textDecoration: 'none'}}>Privacy Settings</a></ListGroupItem>
                    </ListGroup>
                    </Col>
                    <Col xs="6" sm="8">
                        <h1>  Account Settings </h1>
                        <Card outline >
                            <CardBody>
                            <Form>
                                <FormGroup>
                                <CardTitle>Change Profile</CardTitle>
                                <Label for="Name">Name</Label>
                                <Input type="name" name="name" id="name" placeholder="Joe Brown" />
                                </FormGroup>
                                <FormGroup>
                                <Label for="Username">Username</Label>
                                <Input type="username" name="username" id="username" placeholder="JoeBrown" />
                                </FormGroup>
                                <FormGroup>
                                <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="JoeBrown@gmail.com" />
                                </FormGroup>
                          
                                </FormGroup>
                            </Form>
                            </CardBody>
                            <CardBody>
                                <CardTitle>Change Password</CardTitle>
                                <FormGroup>
                                    <Label for="oldPassword">Old Password</Label>
                                    <Input type="password" name="oldpassword" id="oldPassword" placeholder="oldPassword" />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="newPassword">New Password</Label>
                                    <Input type="password" name="newpassword" id="examplePassword" placeholder="newpassword" />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input type="password" name="confirmpassword" id="confirmPassword" placeholder="confirmpassword" />
                                </FormGroup>
                                <Button color='success'>Update Profile</Button>
                            </CardBody>
                          
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AccountSettings;