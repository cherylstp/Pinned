import React, { Component } from 'react';

//This is the navigation bar
import Header from './Header';

//This is for google maps
import GoogleMaps from './GoogleMaps';
import GoogleContainer from './GoogleContainer';

class Homepage extends Component {
    render() {
        
        return (
            <div className="Homepage">
                <Header />
                <GoogleMaps />
            </div>
        );
    }
}

export default Homepage;
