import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import {  CardImg, CardBody,
 CardSubtitle, Media } from 'reactstrap';
 import axios from 'axios';


//import that allows us to have a navigation bar
import Header from '../Home/Header';

//imported so that we can use the google maps
import GoogleMaps from '../Home/GoogleMaps';


//imported so that we can use the calendar
import Calendar from './Calendar';

//This is just an external css that styles the navigation to a sidebar
import '../Home/Header.css';


require('dotenv').config();

//This follows the New Trip page. In here we use the tab to toggle between the mark location, import tweets, add description and other pictures
class NewTrip extends Component {
    
  constructor(props) {
    super(props);
        this.state = {
          tripName : '',
          startDate: '',
          endDate: '',
          tweet: [],
          description: ''
        }
        
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: '1',
        tweet: []
      
    };
  }
  
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        
      });

    }
  }

  handleNameChange = (event) => {
    this.setState({ 
      tripName: event.target.value,
    
    
    
    });
  }
  handleDescription= (event) => {
    this.setState({ 
      description: event.target.value,
    
    
    
    });
  }
  handleStartDateChange = (event) => {
      this.setState({   
        startDate: event.target.value
      
      });
    }
    handleEndDateChange = (event) => {
      this.setState({   
        endDate: event.target.value
      
      });
    }
   
    componentDidMount() {
      fetch('/tweet')
      
        .then(res => res.json())
        .then( tweet  => this.setState({ tweet }));
    }



    handleSubmit = (event) => {
      event.preventDefault();

      var self = this;
      fetch('/map', { 
        method: 'POST',
        data: {
          tripName : self.refs.tripName,
          tweet: self.refs.tweet,
          description: self.refs. description
        }
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
    }
  
  render() {
    return (
      <div className="NewTrip main">
       
       <Header />
        <Nav tabs color="success">
          <NavItem>
          <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
            >
              Mark Location
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
            >
            Import Tweets
              </NavLink>
      
            
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
            >
              Add Descriptions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
            >
              Final Map
            </NavLink>
          </NavItem>
      
        </Nav>
        <Form onSubmit={this.onSubmit}>  
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
            <div style={{width:'1000px', height: '400px'}}>
                  <GoogleMaps />
                  </div>
            <Card body style={{width:'100px', }}>
                  <CardTitle>Create New Trip</CardTitle>
                  <Label for="tripName">What would you like to name this trip?</Label>
                  <Input style={{ marginBottom:'10px'}} type="tripName" value={this.state.tripName}  onChange={this.handleNameChange} name="tripName" id="tripName" placeholder="ex: Road Trip 2018" />  
                 <CardText>
                    {this.state.tripName}

                  </CardText>
                  <Button onClick={() => { this.toggle('2'); }} >Next</Button>
                  <Button style={{ marginTop:'10px'}}>Cancel</Button>
                </Card>
              
             
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
            <Card body>
           
                  <CardTitle>Select the dates you had this trip: </CardTitle>
                  <CardText>
                      
                      <Label for="startTrip"> Start Date: What day did you start this trip?</Label>
                      <FormGroup>
                        <Input style={{ marginBottom:'10px'}}  type="date" value={this.state.startDate}  onChange={this.onChange} name="startDate" id="startDate" placeholder="date placeholder" />
                      </FormGroup>
                  </CardText>

                   <CardText>
                      
                      <Label for="endTrip"> End Date: What day did you end this trip?</Label>
                      <FormGroup>
                        <Input style={{ marginBottom:'10px'}}  type="date" value={this.state.startDate}  onChange={this.onChange} name="endDate" id="endDate" placeholder="date placeholder" />
                      </FormGroup>
                  </CardText>

                  <CardText>
                    {this.state.startDate}
                    {this.state.endDate}
                  </CardText>
                  <Button style={{ marginTop:'20px'}} color="success" onClick={() => { this.toggle('3'); }}>Add Descriptions</Button>
                  <Button style={{ marginTop:'20px'}}  color="warning" onClick={() => { this.toggle('1'); }}>Go Back</Button>
            </Card>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
            <Card body>
                  <CardTitle>Add Descrition</CardTitle>
                  <FormGroup>
                  <Input type="textarea" value={this.state.description}  onChange={this.handleDescription} name="text" id="descText" />
                </FormGroup>
                  <Button style={{ marginTop:'20px'}} color="success" onClick={() => { this.toggle('4'); }}>Done</Button>
                  <Button style={{ marginTop:'20px'}}  color="warning" onClick={() => { this.toggle('2'); }}>Go Back</Button>
            </Card>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              
              <Card body>
                  <CardTitle>Here it is: {this.state.tripName}</CardTitle>
                  <CardTitle>{'Here is what you have been up to:'}</CardTitle>
                  {this.state.tweet.map(tweet => {
                   if(tweet.date_time.substr(0, 10) <= this.state.endDate && tweet.date_time.substr(0, 10) >= this.state.startDate ){
                    return (
                       <Card>
                        
                       
                        <CardSubtitle style={{ marginTop:'20px'}}>username: {tweet.username}</CardSubtitle>
                        <CardSubtitle style={{ marginTop:'20px'}}> date: {tweet.date_time
                         .substr(0, 10)
                        
                        }</CardSubtitle>
                         <CardSubtitle style={{ marginTop:'20px'}}>text: {tweet.text
                            .split('https://t.co/')
                            .map((part, index) => index % 2 === 0 ? part : <a target="_blank"></a>)
                        } </CardSubtitle>
                        
                        <CardSubtitle style={{ marginTop:'20px'}}> {tweet.entities.media.map( d => {
                          return (
                            <div>
                            <a href={d.expanded_url}/>
                            <img src={d.media_url} height="400" width="40%" float="right"/>
                           </div>
                         )})}</CardSubtitle>
                      </Card> 
                     
        
                         
                    );
                  }
                    })}
               <CardSubtitle style={{ marginTop:'20px'}}>
               Description: {this.state.description}
              </ CardSubtitle>
           
              <Button style={{ marginTop:'20px'}} color="success" >Submit</Button>

              <Button style={{ marginTop:'20px'}} color="warning" onClick={() => { this.toggle('3'); }}>Go Back</Button>
           </Card>
            </Row>
            
          </TabPane>
        </TabContent>
        </Form>
      </div>
    );
  }
  
}

export default NewTrip;
  
 