import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

//This ForgotPassword.js deals with the when a user forgets their password
class NewPassword extends Component {
  render() {
    return (
      <div className="NewPassword">
      <Container>
      <h1 class="text-center" style= {{ marginTop: 80 }}> New Password </h1>
      <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4 row justify-content-center">
            <Form>
                <FormGroup>
                <Label for="passwordCode">Enter the Code</Label>
                <Input type="code" name="code" id="passwordCode" placeholder="12356" />
                </FormGroup>
                <FormGroup>
                <Label for="newPassword">New Password</Label>
                <Input type="password" name="password" id="newPassword" placeholder="password" />
                </FormGroup>

                <FormGroup>
                <Label for="newPassword">Confirm Password</Label>
                <Input type="password" name="password" id="newPassword" placeholder="password" />
                </FormGroup>

                <Button color="success">Submit </Button>
                <Button color="warning" style={{ float: 'right' }}> Cancel </Button>
                <p style={{ marginTop: 20 }}>Haven't recieved the code yet? </p>
                <Button color="red" style={{ marginLeft: 15 }}> Send me another code </Button>
            </Form>
         </div>
         </div>
      </Container>
      </div>
    );
  }
}


export default NewPassword;