import React, { Component } from 'react';
import {connect} from 'react-redux';
import
  { Panel,Clearfix,ButtonToolbar,ButtonGroup,Button,
    FormGroup,FormControl,ControlLabel,HelpBlock }
from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';

import { filterList } from '../actions';

import style from '../sass/style.scss';

class SearchFilter extends Component {
  constructor(props){
    super(props);
    this.state =  {
      nameVal:'',
      jobVal:'',
    }
  }

  getValidationState(){
    const length = this.state.nameVal.length;
    if (length < 2 && length !== 0) return 'warning';
    else return 'warning';
  }

  handleNameChange(e){
    console.log('handle change target ', e.target);
    this.setState({nameVal:e.target.value});
  }

  handleJobChange(e){
    console.log('handle change target ', e.target);
    this.setState({jobVal:e.target.value});
  }

  render(){
    console.log(this.state);
    return(
      <Panel>
        <form>
          <FormGroup controlId="formBasicText"
            validationState={()=>this.getValidationState()}
          >
            <ControlLabel>Search for a Person</ControlLabel>
            <FormControl
              type="text"
              value={this.state.nameVal}
              onChange={(e)=>this.handleNameChange(e)}
            />
            <ControlLabel>Search by Job Title</ControlLabel>
            <FormControl
              type="text"
              value={this.state.jobVal}
              onChange={(e)=>this.handleJobChange(e)}
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

export default connect(mapStateToProps,{})(SearchFilter)
