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
    this.state = { showing:[0,0], button:0 }
  }

  componentDidMount(){
    this.setState({
      showing:[this.props.firstItem,this.props.lastItem]
    })
  }

  onChange = value => {
    console.log('onchange called ', arguments);
    this.setState({button:value});
    switch (value) {
      case 1:
        //lower page
        let newMin;
        this.state.showing[0]<=0 ? newMin -= this.props.resultsPerPage : newMin = 0;
        return this.props.changeMin(newMin);
      case 3:
        return this.props.changeMax(this.state.showing[0]+resultsPerPage);
      default:
        break;
    }
  }

  render(){

    return(
      <Panel>
        <Clearfix>
          <ButtonToolbar>
            <ButtonGroup onChange={this.onChange} value={this.state.button}>
              <Button value={1}>Previous</Button>
              <Button value={2}>Showing:</Button>
              <Button value={3}>Next</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Clearfix>
      </Panel>
    )
  }

}

function mapStateToProps(state,ownProps){
  return{
    firstItem:state.ui.firstItem,
    lastItem:state.ui.lastItem,
    resultsPerPage:state.ui.resultsPerPage
  }
}

export default connect(mapStateToProps,{changeMax,changeMin})(PageControls)
