import React, { Component } from 'react';
import {connect} from 'react-redux';
import
  {Panel,Clearfix,ButtonToolbar,ButtonGroup,Button}
from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { changeMax, changeMin } from '../actions';

import style from '../sass/style.scss';

class PageControls extends Component {
  constructor(props){
    super(props);
    this.state = { showing:[0,9], resultsPerPage:10}
  }

  componentWillMount(){
    this.setState({
      showing:[this.props.firstItem,this.props.lastItem],
      resultsPerPage:this.props.resultsPerPage
    })
  }

  setRange(min,max){
    this.props.changeMin(min);
    this.props.changeMax(max);
  }

  onClick = value => {
    console.log('onchange called ', value);
    switch (value) {
      case 'min':
        //lower page
        let newMin;
        this.state.showing[0] > 0 ? newMin -= this.state.resultsPerPage : newMin = 0;
        this.setState({showing:[newMin,newMin - this.state.resultsPerPage]})
        return this.setRange(this.state.showing[0],this.state.showing[1]);
      case 'max':
        let newMax = this.state.showing[1] + this.state.resultsPerPage;
        this.setState({showing:[newMax-this.state.resultsPerPage,newMax]});
        return this.setRange(this.state.showing[0],this.state.showing[1]);
      default:
        break;
    }
  }

  render(){

    return(
      <Panel>
        <Clearfix>
          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={()=>this.onClick('min')}>Previous</Button>
              <Button value={2}>
                Showing: {this.state.showing[0]} - {this.state.showing[1]}
              </Button>
              <Button onClick={()=>this.onClick('max')}>Next</Button>
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

export default connect(mapStateToProps,{changeMax,changeMin})(PageControls)
