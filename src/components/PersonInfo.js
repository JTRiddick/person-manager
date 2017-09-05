import React, { Component } from 'react';
import {csv} from 'd3-request';
import _ from 'lodash';

import style from '../sass/style.scss';
import data from '../public/data/Employees.csv';


export default class PersonInfo extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  mapPeople(data){
    this.setState({
      people: data.map(person,i,arr => ({
        FirstName:person['First Name'],
        LastName:person['Last Name'],
      }))
    })
  }

  loadList(data){
    if (data === {}) {
    return (<div className={`container ${style.denied}`}>
      <Panel header="There's a Problem!" bsStyle="danger">
        <p>No People Found</p>
      </Panel>
  </div>)}else{
    //test

    return _.map(data, person => {
      return(
        <li className="list-group-item" key={person['ID']}>
          <div>
            <h5>
              {person['First Name']}
            </h5>
            <h5>
              <b>{person['Last Name']}</b>
            </h5>
          </div>
        </li>
      )
    })
  }
  }

  componentWillMount(){
    console.log('employees ...',data);
    if (!data){
      this.setState({loadError:true})
      console.log('csv load error');
    }else{
      const people = _.mapKeys(data,'ID');
      this.setState({people: {...people}});
    }
  }

  render() {
    console.log('person info state at render ',this.state);
    return (
      <div id={style.CSVload}>
        <h1>Hi, I'm working now</h1>
        <div>
          <ul>
            {this.loadList(this.state.people)}
          </ul>
        </div>
      </div>
    );
  }
}
