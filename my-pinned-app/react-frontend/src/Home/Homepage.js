import React, { Component } from 'react';

//This is the navigation bar
import Header from './Header';
import './Header.css';
//This is for google maps
import GoogleMaps from './GoogleMaps';


class Homepage extends Component {
    render() {
        
        return (
            <div className="Homepage main">
                <Header />
                <GoogleMaps />
            </div>
        );
    }
}

export default Homepage;
