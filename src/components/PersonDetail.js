import React, { Component } from 'react';
import
  {Panel,Clearfix,Grid,Row,Col,Button,Glyphicon}
from 'react-bootstrap';
import {Link} from 'react-router-dom';

import style from '../sass/style.scss';

class PersonDetail extends Component{
  constructor(props){
    super(props);
    //state will toggle class, main row for expanded, collapse row for collapsed
    this.state = {
      rowStatus:'main-row',
      secret:'hidden'
    }
  }

  toggleRow(){
    (this.state.rowStatus == 'main-row') ?
      this.setState({rowStatus:'hidden-row'}) :
      this.setState({rowStatus:'main-row'});
  }

  render(){
    const person = this.props.person;
    if(!person){
      return(
        <div>
          ?
        </div>
      )
    }else{
      return(
        <Row className={`${this.state.rowStatus}`}>
          <div className="column-header">
            <Link to={`/show/${person.ID}`}>
              {person['Last Name']}, {person['First Name']} ID: {person['ID']}
            </Link>
            <Button onClick={()=>this.toggleRow()} bsSize="xs">
              <Glyphicon glyph={(this.state.rowStatus == 'main-row')?"minus":"plus"}/>
            </Button>
          </div>
          <div className="row-detail">
            <Name person={person}/>
            <Contact person={person}/>
            <Location person={person}/>
            <Secret person={person} status={this.state.secret}/>
          </div>
        </Row>
      )
    }
  }

}

const Name = props => {
  return(
    <Col md={4}>
      <div>
        <h4>
          {props.person['First Name']}
          <b> {props.person['Last Name']}</b>
        </h4>
        <h4>
          {props.person['Job']}
        </h4>
      </div>
    </Col>
  )
}

const Contact = props => {

  return(
    <Col md={4} className="contact-detail">
      <p>Email: {props.person['Email']}</p>
      <p>C Number: {props.person['C_Number']}</p>
    </Col>
  )
}

const Location = props => {
  return(
    <Col md={4} className="address-detail">
      <h4>Home Address:</h4>
      <p>
        {props.person['Address']}
      </p>
      <p>
        {props.person['City']}
      </p>
      <p>
        {props.person['State']}
      </p>
    </Col>
  )
}

const Secret = props => {
  return (
    <div className={props.status}>
      <p>{props.person['SSN']}</p>
    </div>
  )
}

export {PersonDetail,Name,Contact,Location,Secret}
