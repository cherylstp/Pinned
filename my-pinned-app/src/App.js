import React, { Component } from 'react';

//This is so that I can navigate to different components
import {BrowserRouter as Router, Route } from 'react-router-dom';

//imported the Header so that I can be able to use it here
import Login from './Registration/Login';
import Register from './Registration/Register';
import ForgotPassword from './Registration/ForgotPassword';
import NewPassword from './Registration/NewPassword';
import Header from './Home/Header';
import Homepage from './Home/Homepage';
//only need to include the App.css here, no where else
import './App.css';


//This App.js is the gateway to our main app components, use it as a placeholder for all of the other components
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={ Login } />
          <Route path="/Register" exact component={ Register } />
          <Route path="/forgotpassword" exact component={ ForgotPassword } />
        </div>
      </Router>
    );
  }
}

export default App;
