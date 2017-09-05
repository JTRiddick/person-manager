import React, { Component } from 'react';
import {connect} from 'react-redux';
import {csv} from 'd3-request';
import _ from 'lodash';
import {Panel} from 'react-bootstrap';

import { getAll } from '../actions';

import style from '../sass/style.scss';



class PersonIndex extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.getAll();
  }

  componentDidMount(){
    if(!this.props.peopleList){
      this.setState({loadError:true})
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
        <li className="list-group-item" key={person['ID']}>
          <p>
            {person['ID']}
          </p>
          <div>
            <h6>
              <em>{person['First Name']}</em>
            </h6>
            <h5>
              <b>{person['Last Name']}</b>
            </h5>
            <h4>
              {person['Job']}
            </h4>
          </div>
          <div>
            <p>{person['Email']}</p>
            <p>{person['C_Number']}</p>
          </div>
          <div>
            <p>
              {person['Address']}
            </p>
            <p>
              {person['City']}
            </p>
            <p>
              {person['State']}
            </p>
          </div>
          <div>
            <p>{person['SSN']}</p>
          </div>
        </li>
      )});
    }
  }


  render() {
    console.log('person index state at render ',this.state);
    console.log('person index props @ render ',this.props);
    return (
      <div id={style.CSVload}>
        <h1>Hi, I'm working now</h1>
        <div>
          <ul>
            {this.generateList()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    peopleList:state.people
  };
}

export default connect(mapStateToProps,{getAll})(PersonIndex)
