import React from 'react';
import
  {Panel,Clearfix,Col}
from 'react-bootstrap';

import style from '../sass/style.scss';


const Name = props => {
  return(
    <Col md={4}>
      <div>
        <h4>
          <b>{props.person['Last Name']} </b>,
          <em>{props.person['First Name']}</em>
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
    <Col md={4}>
      <p>{props.person['Email']}</p>
      <p>{props.person['C_Number']}</p>
    </Col>
  )
}

const Location = props => {
  return(
    <Col md={4}>
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
    <div>
      <p>{props.person['SSN']}</p>
    </div>
  )
}

export {Name,Contact,Location,Secret}
