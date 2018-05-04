import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//This is the navigation bar. I am importing it so that I can be able to use it
import Header from '../Home/Header';
import GoogleMaps from '../Home/GoogleMaps';

//This is just an external css that styles the navigation to a sidebar
import '../Home/Header.css';

class Shared extends Component {
    render() {
        
        return (
            <div className="Shared main">
                <Header />
               
                <div style={{width:'100%', height: '100%', marginBottom: '80px'}}> 
                       <h1 style={{textAlign: 'center'}}> Friend no. 1</h1>      
                       <GoogleMaps />
                       
                 </div>     
                   
                 <div style={{width:'100%', height: '100%', marginTop: '600px'}}> 
                        <h2 style={{textAlign: 'center'}}> Friend no. 2 </h2> 
                            <GoogleMaps />
                       
                 </div>  
                  
               
            </div>
        );
    }
}

export default Shared;
