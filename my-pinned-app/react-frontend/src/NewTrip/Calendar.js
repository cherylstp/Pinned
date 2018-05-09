import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';



class Calendar extends Component {   
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  
  render() {
    return (
       <div>
        <DatePicker
            dateFormat="YYYY/MM/DD"
            placeholderText="Click to select a date" 
            selected={this.state.date}
            onClick={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleChangeStart}
            
    
        />


        <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
        />
        </div>
     );
    
  }
}

export default Calendar;

