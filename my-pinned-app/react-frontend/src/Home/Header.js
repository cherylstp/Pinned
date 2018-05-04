import React, { Component } from 'react';

//This is just an external css that styles the navigation to a sidebar
import './Header.css';
   
//Make sure that the class matches the file name!!
class Header extends Component {
  render() {
    return (
      <div className="Header"> 
          <p> Hello, User! </p>
          <div className="sidenav">
          <p className="logo"> Pinned </p>
          <a href="/home">Home</a>
      
          <a href="/newtrip">New Trip</a>
          <a href="/myaccount">Profile</a>
          <a href="/account">Settings</a>
          <a href="/logout">Logout</a>
       </div>
      </div>
    );
  }
}

export default Header;
