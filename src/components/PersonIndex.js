import React, { Component } from 'react';
import {connect} from 'react-redux';
import {csv} from 'd3-request';
import _ from 'lodash';
import { Panel, Grid, Row, Col, Clearfix, ButtonToolbar, ButtonGroup, Button }
  from 'react-bootstrap';
import { Link } from 'react-router-dom';

import  PageControls  from './PageControls';
import  PersonDetail from './PersonDetail';

import { getAll, getPage, resetResults, toggleAllRows } from '../actions';

import style from '../sass/style.scss';



class PersonIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      loadError:true,
      currentRange:{min:0,max:9},
    };
  }

  componentWillMount(){
    console.log('index will mount');
    if(!this.props.people || this.props.people.length < 0 || !Array.isArray(this.props.people)){
      console.log('index will mount shows no people list');
      this.props.getPage(this.state.currentRange.min,this.state.currentRange.max);
    }else{
      console.log('temporary fallback');
      //temporary fallback to test mounting from nav
      this.props.getPage(0,9);

    }
    this.setState({
      loadError:false,
    })
  }

  componentDidMount(){
    //console.log('index did mount');

  }

  componentWillUnmount(){

  }

  handleCollapseAll(){
    this.props.toggleAllRows();
  }

  generateList(people){
    console.log('generating list ',people.length,people);
    if (people === []) {
      this.setState({loadError:true})
      this.resetResults();
    return (<div className={`container ${style.denied}`}>
      <Panel header="There's a Problem!" bsStyle="danger">
        <p>No People Found</p>
      </Panel>
    </div>)
  }else{
    return _.map(people, person => {
      return(
        <PersonDetail person={person}  key={person['ID']} />
      )});
    }
  }


  render() {
    console.log('person index state at render ',this.state);
    console.log('person index props @ render ',this.props);

    return (
      <div id={style.CSVload}>
        <ButtonToolbar>
          <ButtonGroup >
            <Button onClick={()=>{this.props.toggleAllRows()}}>
              Minimize/Maximize All
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
        <div>
          <Grid>
            {this.generateList(this.props.peopleList)}
          </Grid>
        </div>

      </div>
    );

  }
}

function mapStateToProps(state,ownProps){
  return {
    peopleList:state.people,
    sortBy:state.ui.sortBy,
    firstItem:state.ui.firstItem,
    lastItem:state.ui.lastItem,
    collapseAll:state.ui.collapsed
  };
}

export default connect(mapStateToProps,{getAll,getPage,resetResults,toggleAllRows})(PersonIndex)
