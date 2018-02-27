import React, { Component } from 'react';
import { Alert } from 'reactstrap';

//This is the navigation bar
import Header from '../Home/Header';
import '../Home/Header.css';
//This is for google maps


class logout extends Component {
    render() {
        
        return (
            <div className="logout" style={{marginTop: '60px'}}>
              
                <Alert color="success">
        <h4 className="alert-heading">Logout was Successful!</h4>
        <p>
           You have been successfully logged out. We hope to see you again sometime soon
           or else we will miss you. If you clicked the wrong button, please follow the 
           link to the login page or wait and you will be redirected to the home page in a few seconds.
          
        </p>
        <hr />
        <p className="mb-0">
          <a href="/">Take me back to the login page </a>
        </p>
      </Alert>
            </div>
        );
    }
}

export default logout;