import React, { Component } from 'react';
import {connect} from 'react-redux';
import
  { Panel,Clearfix,ButtonToolbar,ButtonGroup,Button,
    FormGroup,FormControl,ControlLabel,HelpBlock }
from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';

import { searchList } from '../actions';

import style from '../sass/style.scss';

class SearchFilter extends Component {
  constructor(props){
    super(props);
    this.state =  {
      searchVal:'',
    }
  }

  getValidationState(){
    const length = this.state.searchVal.length;
    if (length < 2 && length !== 0) return 'warning';
    return 'success';
  }

  handleChange(e){
    console.log('handle change target ', e.target);
    this.setState({searchVal:e.target.value});
    this.props.searchList(e.target.value);
  }

  render(){
    console.log(this.state);
    return(
      <Panel>
        <form>
          <FormGroup controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Search for a Person</ControlLabel>
            <FormControl
              type="text"
              value={this.state.searchVal}
              onChange={(e)=>this.handleChange(e)}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </Panel>
    )
  }
}


function mapStateToProps(state,ownProps){
  return{

  }
}

export default connect(mapStateToProps,{searchList})(SearchFilter)
