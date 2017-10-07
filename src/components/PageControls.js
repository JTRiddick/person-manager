import React, { Component } from 'react';
import {connect} from 'react-redux';
import
  {Panel,Clearfix,ButtonToolbar,ButtonGroup,Button}
from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';

import { setRange, getPage, resetResults, toggleAllRows, changePageSize } from '../actions';

import style from '../sass/style.scss';

//this needs to do something else when we're on single view
class PageControls extends Component {

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
        let newMin = (min >= this.props.resultsPerPage) ? min - this.props.resultsPerPage : 0;
        console.log('new min ',newMin);
        this.setState({
          showing:[newMin,newMin+this.props.resultsPerPage],
        })
        this.props.setRange(newMin,newMin + this.props.resultsPerPage);
        return this.props.getPage(newMin,newMin + this.props.resultsPerPage);
      case 'max':
        let newMax = max + this.props.resultsPerPage;
        console.log('new max ',newMax);
        this.setState({
          showing:[max,newMax],
        })
        this.props.setRange(max,newMax);
        return this.props.getPage(max,newMax);
      case 'back':
        return this.props.resetResults(()=>{this.props.history.push('/')});
      case 'more':
        this.setState({
          resultsPerPage: this.state.resultsPerPage+10
        })
        return this.props.changePageSize(10);
      case 'less':
        if(this.state.resultsPerPage > 10){
          this.setState({
            resultsPerPage: this.state.resultsPerPage-10
          })
          return this.props.changePageSize(-10);
        }
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
              <Button onClick={()=>{this.onClick('min')}}>Previous </Button>
              <Button onClick={()=>{this.onClick(/*'back'*/)}}>
                Showing: {firstItem} - {lastItem}
              </Button>
              <Button onClick={()=>{this.onClick('max')}}>Next</Button>
            </ButtonGroup>

            <ButtonGroup >
              <Button onClick={()=>{this.props.toggleAllRows()}}>
                Minimize/Maximize All
              </Button>
              <Button onClick={()=>{this.onClick('more')}}>
                More Results
              </Button>
              <Button d onClick={()=>{this.onClick('less')}}>
                Fewer Results
              </Button>
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

export default connect(mapStateToProps,{setRange,getPage,resetResults,toggleAllRows,changePageSize})(PageControls)
