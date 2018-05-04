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
                        const text={tweet.tweet
                            .split('. ')
                            .map((part, index) => index % 2 === 0 ? part : <a href={part} target="_blank">{part}</a>)
                        }
                         position={{ lat: tweet.coordinates.latitude,
                          lng: tweet.coordinates.longitude }}
                          title={'tweets'}
                          name={'Here is where you have been:'}


                          />
                    );
                    })}


               
                <InfoWindow marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
                    <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    <Card>
                        <CardBody>
                            <h1>
                           
                            
                        
                            </h1>
                            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I will never forget my first HTTP request measured in µs :-) <a href="https://twitter.com/hashtag/elixir?src=hash&amp;ref_src=twsrc%5Etfw">#elixir</a> <a href="https://twitter.com/hashtag/phoenix?src=hash&amp;ref_src=twsrc%5Etfw">#phoenix</a></p>&mdash; Tiago Guedes (@tiagopog) <a href="https://twitter.com/tiagopog/status/807811447862468608?ref_src=twsrc%5Etfw">December 11, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            <CardImg top width="100%" src="https://twitter.com/DT_Les/status/570264145116819457/photo/1" alt="Card image cap" />
                            <CardTitle>{this.state.selectedPlace.title}</CardTitle>
                            <CardSubtitle>{this.state.selectedPlace.subtitle}</CardSubtitle>
                            <CardText>{this.state.selectedPlace.text
  
                            
                            }</CardText>
                            <Button color="success">See more</Button>
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


