import React from 'react';
import
  {Panel,Clearfix,ButtonToolbar,ButtonGroup,Button}
from 'react-bootstrap';

import style from '../sass/style.scss';


export const Name = props => {
  return(
    <div>
      <h5>
        <em>{props['First Name']}</em>
      </h5>
      <h4>
        <b>{props['Last Name']}</b>
      </h4>
      <h4>
        {props['Job']}
      </h4>
    </div>
  )
}

export const Contact = props => {
  return(
    <div>
      <p>{props['Email']}</p>
      <p>{props['C_Number']}</p>
    </div>
  )
}

export const Location = props => {
  return(
    <div>
      <p>
        {props['Address']}
      </p>
      <p>
        {props['City']}
      </p>
      <p>
        {props['State']}
      </p>
    </div>
  )
}

export const Secret = props => {
  return (
    <div>
      <p>{props['SSN']}</p>
    </div>
  )
}
