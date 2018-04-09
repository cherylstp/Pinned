import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

//This Register.js deals with the register form for the application
class Register extends Component{
  
  render() {
    return (
      <div className="Register">
      <Container>
      <h1 class="text-center"style= {{ marginTop: 80 }}> New to Pinned? </h1>
      <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4 row justify-content-center">
            <Form>
            <FormGroup>
                <Label for="registerName">Name</Label>
                <Input type="name" name="name" id="registerName" placeholder="Jack Black" />
                </FormGroup>
                <FormGroup>
                <Label for="registerEmail">Email</Label>
                <Input type="email" name="email" id="loginEmail" placeholder="abcd@xxxx.com" />
                </FormGroup>
                <FormGroup>
                <Label for="registerUsername">Username</Label>
                <Input type="username" name="username" id="registerUsername" placeholder="jackblack12" />
                </FormGroup>
                <FormGroup>
                <Label for="registerPassword">Password</Label>
                <Input type="password" name="password" id="registerPassword" placeholder="password" />
              
                </FormGroup>
                <Button color="success">Sign Up</Button>
                <Button color="warning" style={{ float: 'right' }}>Cancel</Button>
                <p>Already have an account with us?<Link to="/" style={{marginLeft: 5 }}>Sign In</Link></p>
            </Form>
         </div>
         </div>
      </Container>
      </div>
    );
  }
}


export default Register;