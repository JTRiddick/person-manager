import React, { Component } from 'react';
import {connect} from 'react-redux';
import
  { Panel,Clearfix,ButtonToolbar,ButtonGroup,Button,
    FormGroup,FormControl,ControlLabel,HelpBlock }
from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';

import { searchList,resetResults } from '../actions';

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
      return 'warning'
    }else{
    return 'success';
    }
  }

  handleChange(e){
    this.setState({searchVal:e.target.value});
    if(this.formGroup.props.validationState === 'success'){
      this.setState({allowSearch:true, searchTerm:e.target.value})
    }else{
      this.setState({allowSearch:false})
    }
  }

  performSearch(e){
    e.preventDefault();
    if(this.state.allowSearch){
      this.props.searchList(this.state.searchTerm,()=>{this.props.history.push('/show')});
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
            ref={(formGroup)=>this.formGroup=formGroup}
            validationState={this.getValidationState()}
            onSubmit={(e)=>this.performSearch(e)}
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

export default connect(mapStateToProps,{searchList,resetResults})(SearchFilter)
