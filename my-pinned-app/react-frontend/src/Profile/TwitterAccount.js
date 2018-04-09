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
                    <ListGroupItem color='secondary' tag="button" action><a href="/myaccount" style={{color: 'black', textDecoration: 'none'}}>General</a></ListGroupItem>
                    <ListGroupItem color='secondary' tag="button" active action><a href="/twitaccount" style={{color: 'white', textDecoration: 'none', textAlign: 'center'}}>My Twitter Account</a></ListGroupItem>
                    </ListGroup>
                    </Col>
                    <Col xs="6" sm="8">
                        <h1>  Twitter Account </h1>
                        <Card outline >
                            <CardBody>
                            <CardTitle>Username</CardTitle>
                            <CardText>Joe Brown</CardText>
                            <CardTitle>Password</CardTitle>
                            <CardText>***********</CardText>
                            <Button color='warning'>Edit</Button>
                            <Button color='danger' style={{float:'right'}}>Cancel</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Account;