import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import {  CardImg, CardBody,
 CardSubtitle, Media } from 'reactstrap';


//import that allows us to have a navigation bar
import Header from '../Home/Header';

//imported so that we can use the google maps
import GoogleMaps from '../Home/GoogleMaps';


//imported so that we can use the calendar
import Calendar from './Calendar';

//This is just an external css that styles the navigation to a sidebar
import '../Home/Header.css';

//This follows the New Trip page. In here we use the tab to toggle between the mark location, import tweets, add description and other pictures
class NewTrip extends Component {
    
  constructor(props) {
    super(props);
        this.state = {
          tweet : []
        }
        
      
    
    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: '1'
       
      
    };
  }
 
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        
      });

    }
  }

  
  componentDidMount() {
    fetch('/tweet')
    
      .then(res => res.json())
      .then( tweet  => this.setState({ tweet }));
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
              Add Pictures
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
            >
              Add Descriptions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
            >
              Share Trip
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
            <div style={{width:'1000px', height: '400px'}}>
                  <GoogleMaps />
                  </div>
            <Card body style={{width:'100px', }}>
                  <CardTitle>Create New Trip</CardTitle>
                  <Label for="tripName">What would you like to name this trip?</Label>
                  <Input style={{ marginBottom:'10px'}} type="tripName" name="tripName" id="tripName" placeholder="ex: Road Trip 2018" />  
                  <Button onClick={() => { this.toggle('2'); }}>Next</Button>
                  <Button style={{ marginTop:'10px'}}>Cancel</Button>
                </Card>
              
             
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
            <Card body>
                  <CardTitle>Select the dates you had this trip: </CardTitle>
                  <CardText>
                      
                  </CardText>
                  <Button style={{ marginTop:'20px'}} color="success" onClick={() => { this.toggle('3'); }}>Add Descriptions</Button>
                  <Button style={{ marginTop:'20px'}}  color="warning" onClick={() => { this.toggle('1'); }}>Go Back</Button>
            </Card>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
            <Card body>
                  <CardTitle>Add Pictures</CardTitle>
                  <Col>

                  </Col>
                  <Button style={{ marginTop:'20px'}} color="success" onClick={() => { this.toggle('4'); }}>Add Descriptions</Button>
                  <Button style={{ marginTop:'20px'}}  color="warning" onClick={() => { this.toggle('2'); }}>Go Back</Button>
            </Card>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              
              <Card body>
                  <CardTitle>Add Description</CardTitle>
                
                <FormGroup>
                  <Input type="textarea" name="text" id="descText" />
                </FormGroup>
              <Button style={{ marginTop:'20px'}} color="success" onClick={() => { this.toggle('5'); }}>Share Trip</Button>
              <Button style={{ marginTop:'20px'}}  color="warning" onClick={() => { this.toggle('3'); }}>Go Back</Button>
           </Card>
            </Row>
            
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col>
             
              </Col>
              <Button style={{ marginTop:'20px'}} color="success" onClick>Add Trip</Button>
              <Button style={{ marginTop:'20px'}}  color="warning" onClick={() => { this.toggle('1'); }}>Cancel</Button>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
  
}


export default NewTrip;