import React, { Component } from 'react';
import {connect} from 'react-redux';
import
  {Panel,Clearfix,ButtonToolbar,ButtonGroup,Button}
from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';

import { filterList } from '../actions';

import style from '../sass/style.scss';

class SearchFilter extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <Panel>

      </Panel>
    )
  }
}


function mapStateToProps(state,ownProps){
  return{

  }
}

export default connect(mapStateToProps,{})(SearchFilter)
