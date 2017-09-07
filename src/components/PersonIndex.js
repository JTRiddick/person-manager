import React, { Component } from 'react';
import {connect} from 'react-redux';
import {csv} from 'd3-request';
import _ from 'lodash';
import {Panel, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import  PageControls  from './PageControls';
import { Name, Contact, Location } from './PersonDetail';

import { getAll, getPage } from '../actions';

import style from '../sass/style.scss';



class PersonIndex extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    if(!this.props.peopleList){
      this.setState({loadError:true})
    }
    this.props.getPage(this.props.firstItem,this.props.lastItem);
  }

  componentWillReceiveProps(nextProps){
    console.log('next props ',nextProps);
    this.setState({
      firstItem:nextProps.firstItem,
      lastItem:nextProps.lastItem
    });
    if(nextProps.firstItem !== this.state.firstItem && nextProps.lastItem !== this.state.lastItem){
      this.props.getPage(this.state.firstItem,this.state.lastItem);
    }
  }

  generateList(){
    if (this.props.peopleList === {}) {
    return (<div className={`container ${style.denied}`}>
      <Panel header="There's a Problem!" bsStyle="danger">
        <p>No People Found</p>
      </Panel>
  </div>)}else{
    return _.map(this.props.peopleList, person => {
      return(
        <Row className="main-row" key={person['ID']}>
          <div className="column-header">
            <Link to={`/show/${person.ID}`}>
              {person['ID']}
            </Link>
          </div>
          <Name person={person}/>
          <Contact person={person}/>
          <Location person={person}/>
        </Row>
      )});
    }
  }


  render() {
    // console.log('person index state at render ',this.state);
    // console.log('person index props @ render ',this.props);
    if(this.props.peopleList){
      return (
        <div id={style.CSVload}>
          <h1>Showing Everybody</h1>
          <div>
            <Grid>
              {this.generateList()}
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
