import React, { Component } from 'react';

//importing the package needed for google maps
import {GoogleApiWrapper} from 'google-maps-react'
import {Map, InfoWindow, Marker } from 'google-maps-react';

class GoogleMaps extends Component {
    

   
    render() {
        return (
            <div className="GoogleMaps">
                <Map google={this.props.google} style={{width:'100%', float: 'right', height: '90%', position: 'relative'}}
                  className={'map'}  zoom={14}>

                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: 37.778519, lng: -122.405640}} />
  
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                    <h1></h1>
                    </div>
                </InfoWindow>
                </Map>
                
        </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCMdrp6nOKPCHKLNS_rFvjqKPhrgWPZK2s'
})(GoogleMaps)


