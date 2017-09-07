import React, { Component } from 'react';
import {connect} from 'react-redux';
import {csv} from 'd3-request';
import _ from 'lodash';
import {Panel, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import  PageControls  from './PageControls';
import { PersonDetail } from './PersonDetail';

import { getAll, getPage } from '../actions';

import style from '../sass/style.scss';



class PersonIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      expandRow:'main-row'
    };
  }

  componentWillMount(){
    this.setState({
      firstItem:this.props.firstItem || 0,
      lastItem:this.props.lastItem || 9
    })
  }

  componentDidMount(){
    if(!this.props.peopleList || this.props.peopleList=={ }){
      this.setState({loadError:true})
    }
    this.props.getPage(this.state.firstItem,this.state.lastItem);
  }

  componentWillReceiveProps(nextProps){
    console.log('index next props ',nextProps);
    this.setState({
      firstItem:nextProps.firstItem,
      lastItem:nextProps.lastItem
    });

  }

  generateList(people){
    console.log('generating list ',people);
    if (people === {}) {
    return (<div className={`container ${style.denied}`}>
      <Panel header="There's a Problem!" bsStyle="danger">
        <p>No People Found</p>
      </Panel>
  </div>)}else{
    return _.map(people, person => {
      return(
        <PersonDetail person={person}  key={person['ID']}/>
      )});
    }
  }


  render() {
    console.log('person index state at render ',this.state);
    console.log('person index props @ render ',this.props.peopleList);
    if(this.props.peopleList != {} && !this.state.loadError){
      return (
        <div id={style.CSVload}>
          <h1>Showing Everybody</h1>
          <div>
            <Grid>
              {this.generateList(this.props.peopleList)}
            </Grid>
          </div>
        </div>
      );
    }else{

      return (
        <Panel header="There's a Problem!" bsStyle="warning">
          <p>Loading...</p>
        </Panel>
      )
    }

  }
}

function mapStateToProps(state,ownProps){
  return {
    peopleList:state.people,
    firstItem:state.ui.firstItem,
    lastItem:state.ui.lastItem,
    sortBy:state.ui.sortBy
  };
}

export default connect(mapStateToProps,{getAll,getPage})(PersonIndex)
