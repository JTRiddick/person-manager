import React, { Component } from 'react';
import {connect} from 'react-redux';
import
  { Panel,Clearfix,ButtonToolbar,ButtonGroup,Button,
    FormGroup,FormControl,ControlLabel,HelpBlock }
from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';

import { searchList,resetResults,filterList } from '../actions';

import style from '../sass/style.scss';

class SearchFilter extends Component {
  constructor(props){
    super(props);
    this.state =  {
      searchVal:'',
      allowSearch:false,
      searchType:'Filter'
    }
  }

  getValidationState(){
    const length = this.state.searchVal.length;
    if (length < 2 && !this.state.allowSearch) {
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

  switchFilter(e){
    this.setState({
      searchType: (this.state.searchType === 'Single') ? 'Filter' : 'Single'
    })
  }

  performSearch(e){
    e.preventDefault();
    if(this.state.allowSearch){
      switch (this.state.searchType) {
        case 'Single':
          return this.props.searchList(this.state.searchTerm,()=>{this.props.history.push('/show')});
        case 'Filter':
          return this.props.filterList(this.state.searchTerm,()=>{})
        default:
        return console.log('notice: not going to search');
      }

    }else{
      return console.log('bad validationState: not going to search');
    }

  }

  render(){
    console.log(this.state);
    let searchType = (this.state.searchType === 'Single') ? 'Individual' : 'Keyword';
    return(
      <Panel>
        <form>
          <FormGroup controlId="formBasicText"
            ref={(formGroup)=>this.formGroup=formGroup}
            validationState={this.getValidationState()}
            onSubmit={(e)=>this.performSearch(e)}
          >
            <ControlLabel>Search by {searchType}</ControlLabel>
            <FormControl
              type="text"
              value={this.state.searchVal}
              onChange={(e)=>this.handleChange(e)}
              onSubmit={(e)=>this.performSearch(e)}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
        <Button onClick={(e)=>this.performSearch(e)}>Search</Button>
        <Button onClick={(e)=>this.switchFilter(e)}>{`Toggle Search Type: ${searchType}`}</Button>
      </Panel>
    )
  }
}


function mapStateToProps(state,ownProps){
  return{
    peopleList:state.people
  }
}

export default connect(mapStateToProps,{searchList,resetResults,filterList})(SearchFilter)
