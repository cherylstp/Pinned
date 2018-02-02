import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

//This ForgotPassword.js deals with the when a user forgets their password
class ForgotPassword extends Component {
  render() {
    return (
      <div className="ForgotPassword">
      <Container>
      <h1 class="text-center"style= {{ marginTop: 80 }}> Forgot Your Password? </h1>
      <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4 row justify-content-center">
            <Form>
                <FormGroup>
                <Label for="passwordEmail">Username or Email</Label>
                <Input type="email" name="email" id="passwordEmail" placeholder="abcd@xxxx.com" />
                </FormGroup>
                
                <Button color="success">Send code </Button>
                <Button color="warning" style={{ float: 'right' }}> Cancel </Button>
                <p>Dont have an account with us?<Link to="/Register" style={{marginLeft: 5 }}>Sign Up</Link></p>
            </Form>
         </div>
         </div>
      </Container>
      </div>
    );
  }
}


export default ForgotPassword;
