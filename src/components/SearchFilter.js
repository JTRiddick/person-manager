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
      allowSearch:false
    }
  }

  getValidationState(){
    const length = this.state.searchVal.length;
    if (length < 2 && this.state.allowSearch) {
      this.setState({allowSearch:false})
      return 'warning'
    }else{
    this.setState({allowSearch:true})
    return 'success';
    }
  }

  handleChange(e){
    console.log('handle change target ', e.target);
    this.setState({searchVal:e.target.value});

  }

  performSearch(){
    if(this.state.allowSearch){
      this.props.searchList(e.target.value);
    }else{
      console.log('notice: not going to search');
    }

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
        <Button onClick={(e)=>this.performSearch(e)}>Search</Button>
      </Panel>
    )
  }
}


function mapStateToProps(state,ownProps){
  return{

  }
}

export default connect(mapStateToProps,{searchList})(SearchFilter)
