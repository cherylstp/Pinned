import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

//This Register.js deals with the register form for the application
class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
     name: "",
     email: "",
     username: "",
     password: "" 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
    fetch('/Register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        "name": this.state.name,
        "email": this.state.email,
        "username": this.state.username,
        "password": this.state.password
      })
    })
    .then(res => res.json())
    .then((data) => {
      window.location = "/";
    })
  }
  
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
                <Input type="name" name="name" id="registerName" 
                   value={this.state.name}
                   onChange={this.handleChange} 
                   placeholder="Jack Black" />
                </FormGroup>
                <FormGroup>
                <Label for="registerEmail">Email</Label>
                <Input type="email" name="email" id="loginEmail"
                  value={this.state.email}
                  onChange={this.handleChange} 
                  placeholder="abcd@xxxx.com" />
                </FormGroup>
                <FormGroup>
                <Label for="registerUsername">Username</Label>
                <Input type="username" name="username" id="registerUsername"
                  value={this.state.username}
                  onChange={this.handleChange} 
                  placeholder="jackblack12" />
                </FormGroup>
                <FormGroup>
                <Label for="registerPassword">Password</Label>
                <Input type="password" name="password" id="registerPassword"
                  value={this.state.password}
                  onChange={this.handleChange} 
                  placeholder="password" />
              
                </FormGroup>
                <Button color="success" onClick={(event) => this.handleSubmit(event)}>Sign Up</Button>
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