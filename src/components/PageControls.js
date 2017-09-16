import React, { Component } from 'react';
import {connect} from 'react-redux';
import
  {Panel,Clearfix,ButtonToolbar,ButtonGroup,Button}
from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';

import { setRange, getPage, resetResults } from '../actions';

import style from '../sass/style.scss';

//this needs to do something else when we're on single view
class PageControls extends Component {
  constructor(){
    super();

  }

  componentWillMount(){
    this.setState({
      showing:[this.props.firstItem,this.props.lastItem],
      resultsPerPage: this.props.resultsPerPage - 1
    })
    this.props.getPage(this.props.firstItem,this.props.lastItem);
  }

  onClick = value => {

    let min = this.state.showing[0];
    let max = this.state.showing[1];
    let newMin;
    let newMax;
    // console.log('onclick called with ', value, 'min',min,'max',max);

    switch (value) {
      case 'min':
        //lower page
        let newMin = (min >= this.state.resultsPerPage) ? min - this.state.resultsPerPage : 0;
        console.log('new min ',newMin);
        this.setState({
          showing:[newMin,newMin+this.state.resultsPerPage],
        })
        this.props.setRange(newMin,newMin + this.state.resultsPerPage);
        return this.props.getPage(newMin,newMin + this.state.resultsPerPage);
      case 'max':
        let newMax = max + this.state.resultsPerPage;
        console.log('new max ',newMax);
        this.setState({
          showing:[max,newMax],
        })
        this.props.setRange(max,newMax);
        return this.props.getPage(max,newMax);
      case 'back':
        return this.props.resetResults(()=>{this.props.history.push('/')});
      default:
        break;
    }
  }

  render(){

    let firstItem = this.state.showing[0] || 0;
    let lastItem = this.state.showing[1] || 0;
    return(
      <Panel>
        <Clearfix>
          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={()=>{this.onClick('min')}}>Previous</Button>
              <Button onClick={()=>{this.onClick(/*'back'*/)}}>
                Showing: {firstItem} - {lastItem}
              </Button>
              <Button onClick={()=>{this.onClick('max')}}>Next</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Clearfix>
      </Panel>
    )
  }

}

function mapStateToProps(state,ownProps){
  console.log('control component state, ownProps ', state,ownProps);
  return{
    firstItem:state.ui.firstItem,
    lastItem:state.ui.lastItem,
    resultsPerPage:state.ui.resultsPerPage
  }
}

export default connect(mapStateToProps,{setRange,getPage,resetResults})(PageControls)
