import React from 'react';
import
  {Panel,Clearfix,ButtonToolbar,ButtonGroup,Button}
from 'react-bootstrap';

import style from '../sass/style.scss';


const Name = props => {
  return(
    <div>
      <h5>
        <em>{props.person['First Name']}</em>
      </h5>
      <h4>
        <b>{props.person['Last Name']}</b>
      </h4>
      <h4>
        {props.person['Job']}
      </h4>
    </div>
  )
}

const Contact = props => {
  return(
    <div>
      <p>{props.person['Email']}</p>
      <p>{props.person['C_Number']}</p>
    </div>
  )
}

const Location = props => {
  return(
    <div>
      <p>
        {props.person['Address']}
      </p>
      <p>
        {props.person['City']}
      </p>
      <p>
        {props.person['State']}
      </p>
    </div>
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
