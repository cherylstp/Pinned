import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col, Row, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

//This is the navigation bar
import Header from '../Home/Header';
import '../Home/Header.css';

class Account extends Component {
    render() {
        
        return (
            <div className="Account main">
                <Header />
                <Row>
                    <Col xs="6" sm="4">
                    <ListGroup>
                    <ListGroupItem color='secondary' secondary active action tag="button"><a href="/myaccount" style={{color: 'white', textDecoration: 'none'}}>General</a></ListGroupItem>
                    <ListGroupItem tag="button" secondary action><a href="/twitaccount" style={{color: 'black', textDecoration: 'none'}}>My Twitter Account</a></ListGroupItem>
                    </ListGroup>
                    </Col>
                    <Col xs="6" sm="8">
                        <h1> My Account</h1>
                        <Card outline >
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

                            <CardBody>
                            <CardTitle>Name</CardTitle>
                            <CardText>Joe Brown</CardText>
                            <CardTitle>Username</CardTitle>
                            <CardText>JoeBrown</CardText>
                            <CardTitle>Email</CardTitle>
                            <CardText>JoeBrown@gmail.com</CardText>
                            <CardTitle>Password</CardTitle>
                            <CardText>***********</CardText>
                            <Button color='danger' style={{ float: 'right'}}>Cancel</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Account;