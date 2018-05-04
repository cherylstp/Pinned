import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

//This Login.js deals with the login form for the application
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    fetch('/Login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.password
      })
    })
    .then(res => res.json())
    .then((data) => {
      //window.location = "/Home";
    })
  }

  render() {
    return (
      <div className="Login">
      <Container>
      <h1 class="text-center" style= {{ marginTop: 80 }} > Welcome to Pinned! </h1>
      <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4 row justify-content-center">
            <Form>
                <FormGroup>
                <Label for="loginEmail">Email</Label>
                <Input type="email" name="email" id="loginEmail" 
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="abcd@xxxx.com" />
                </FormGroup>
                <FormGroup>
                <Label for="loginPassword">Password</Label>
                <Input type="password" name="password" id="loginPassword" 
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="password" />
                <Link to= "/forgotpassword"><a  class="text-right">forgot your password?</a></Link>
                </FormGroup>
                <Button color="success" onClick={(event) => this.handleSubmit(event)}>Sign in</Button>
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
