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
      expandRow:'main-row',
      loadError:true,
      currentRange:{min:0,max:9}
    };
  }

  componentWillMount(){
    console.log('index will mount');
    if(!this.props.people || this.props.people=={}){
      console.log('index will mount shows no people list');
      this.props.getPage(this.state.currentRange.min,this.state.currentRange.max);
    }else{
      this.setState({
        loadError:false,
      })
    }
  }

  componentDidMount(){
    //console.log('index did mount');

  }


  generateList(people){
    //console.log('generating list ',people);
    if (people === {}) {
      this.setState({loadError:true})
    return (<div className={`container ${style.denied}`}>
      <Panel header="There's a Problem!" bsStyle="danger">
        <p>No People Found</p>
      </Panel>
    </div>)
  }else if (people.length < 1) {
    return(<PersonDetail person={person}/>)
  }else{
    return _.map(people, person => {
      return(
        <PersonDetail person={person}  key={person['ID']}/>
      )});
    }
  }


  render() {
    console.log('person index state at render ',this.state);
    console.log('person index props @ render ',this.props);

    return (
      <div id={style.CSVload}>
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
    lastItem:state.ui.lastItem
  };
}

export default connect(mapStateToProps,{getAll,getPage})(PersonIndex)
