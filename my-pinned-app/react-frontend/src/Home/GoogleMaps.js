import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Media } from 'reactstrap';

//importing the package needed for google maps
import {GoogleApiWrapper} from 'google-maps-react'
import {Map, InfoWindow, Marker } from 'google-maps-react';

import ReactDOM from 'react-dom';
require('dotenv').config();

class GoogleMaps extends Component {   
    constructor(props) {
        super(props);
        this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          tweet : []
        }
        
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
      }

      componentDidMount() {
        fetch('/tweet')
        
          .then(res => res.json())
          .then( tweet  => this.setState({ tweet }));
      }
    onMarkerClick(props, marker, e) {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }
    
    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      }
   
    render() {
        return (
            <div className="GoogleMaps">
            
                <Map google={this.props.google} onClick={this.onMapClicked} style={{width:'73%', height: '90%'}}
                  className={'map'}  zoom={3}>

                  {this.state.tweet.map(tweet => {
                    return (
                        <Marker onClick={this.onMarkerClick}
                        name={'Here is where you have been:'}
                        username = {tweet.username}
                        subtitle= {tweet.tweet_id}
                        date= {tweet.date_time}
                        
                        
                        const text={tweet.text
                            .split('https://t.co/')
                            .map((part, index) => index % 2 === 0 ? part : <a target="_blank"></a>)
                        }
                        img = {tweet.entities.media.map( d => {
                          return (
                            <div>
                            <a href={d.expanded_url}/>
                            <img src={d.media_url} height="400" width="60%" float="right"/>
                           </div>
                         )})}

                       position={{lat: tweet.coordinates.coordinates[1], lng:  tweet.coordinates.coordinates[0]}}
                         
                         
        
                          />
                    );
                    })}


               
                <InfoWindow marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
                    <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    <Card>
                        <CardBody>
                            
                           
                  
                            <CardTitle> username: {this.state.selectedPlace.username}</CardTitle>
                            <CardText> Date: {this.state.selectedPlace.date}</CardText>
                            <CardText>{this.state.selectedPlace.text }</CardText>
                            <CardSubtitle> {this.state.selectedPlace.img}</CardSubtitle>
                            
                    </CardBody>
                    </Card>
                   
                    </div>
                </InfoWindow>
                </Map>
                
        </div>
        );

    }
    

}


export default GoogleApiWrapper({
        apiKey: process.env.apiKey
})(GoogleMaps)


