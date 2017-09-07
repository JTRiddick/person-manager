import React, { Component } from 'react';
import {connect} from 'react-redux';
import
  {Panel,Clearfix,ButtonToolbar,ButtonGroup,Button}
from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { setRange } from '../actions';

import style from '../sass/style.scss';

class PageControls extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.setState({
      showing:[this.props.firstItem,this.props.lastItem],
      resultsPerPage:this.props.resultsPerPage
    })
  }

  componentWillReceiveProps(nextProps){
    console.log('controls got props ',nextProps);
    this.setState({
      showing:[nextProps.firstItem,nextProps.lastItem],
      resultsPerPage:this.props.resultsPerPage
    })
  }

  onClick = value => {

    let min = this.state.showing[0];
    let max = this.state.showing[1];
    let newMin;
    let newMax;
    console.log('onclick called with ', value, 'min',min,'max',max);
    switch (value) {
      case 'min':
        //lower page
        let newMin = min - this.state.resultsPerPage;
        (min >= 0) ? newMin : newMin = 0;
        console.log('new min ',newMin);
        return this.props.setRange(newMin,newMin + this.state.resultsPerPage);
      case 'max':
        let newMax = max + this.state.resultsPerPage;
        console.log('new max ',newMax);
        return this.props.setRange(max,newMax);
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
              <Button value={2}>
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

export default connect(mapStateToProps,{setRange})(PageControls)
