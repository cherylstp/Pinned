import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

//This Login.js deals with the login form for the application
class Login extends Component {
  render() {
    return (
      <div className="Login">
      <Container>
      <h1 class="text-center" style= {{ marginTop: 80 }} > Welcome to Pinned! </h1>
      <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4 row justify-content-center">
            <Form>
                <FormGroup>
                <Label for="loginEmail">Username or Email</Label>
                <Input type="email" name="email" id="loginEmail" placeholder="abcd@xxxx.com" />
                </FormGroup>
                <FormGroup>
                <Label for="loginPassword">Password</Label>
                <Input type="password" name="password" id="loginPassword" placeholder="password" />
                <Link to= "/forgotpassword"><a  class="text-right">forgot your password?</a></Link>
                </FormGroup>
                <Button color="success">Sign in</Button>
                <p>Dont have an account with us?<Link to="/Register" style={{marginLeft: 5 }} >Sign Up</Link></p>
            </Form>
         </div>
         </div>
      </Container>
      </div>
    );
  }
}

export default Login;
