import React, { Component } from 'react';
import {connect} from 'react-redux';
import {csv} from 'd3-request';
import _ from 'lodash';
import { Panel, Grid, Row, Col, Clearfix, ButtonToolbar, ButtonGroup, Button }
  from 'react-bootstrap';
import { Link } from 'react-router-dom';

import  PageControls  from './PageControls';
import  PersonDetail from './PersonDetail';

import { getAll, getPage, resetResults } from '../actions';

import style from '../sass/style.scss';



class PersonIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      loadError:true,
      currentRange:{min:0,max:9},
      collapseAll:false
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
    this.setState({
      collapseAll:this.props.collapseAll
    })
  }


  generateList(people){
    console.log('generating list ',people.length,people);
    let generatedList;
    if (!people.length) {
      console.log('no people');
      generatedList = (<div className={`container ${style.denied}`}>
        <Panel header="There's a Problem!" bsStyle="danger">
          <p>No People Found</p>
        </Panel>
      </div>)
  }else{
    console.log('mapping people')
    generatedList = _.map(people, person => {
      return(
        <PersonDetail person={person}  key={person['ID']} />
      )});
    }
    return generatedList;
  }


  render() {
    // console.log('person index state at render ',this.state);
    // console.log('person index props @ render ',this.props);

    return (
      <div id={style.CSVload}>

        <Grid className={style.detailContainer}>
          {this.generateList(this.props.peopleList)}
        </Grid>

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

export default connect(mapStateToProps,{getAll,getPage,resetResults})(PersonIndex)
