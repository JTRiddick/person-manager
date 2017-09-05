import React, { Component } from 'react';
import {csv} from 'd3-request';

import style from '../sass/style.scss';
import data from '../public/data/Employees.csv';


export default class PersonInfo extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    console.log('employees ...',data);
    if (!data){
      this.setState({loadError:true})
      console.log('csv load error');
    }else{
      this.setState({
        people: data.map(person => ({
          FirstName:person['First Name'],LastName:person['Last Name']
        }))
      })
    }
  }

  render() {
    console.log('person info state at render ',this.state);
    return (
      <div id={style.CSVload}>
        <h1>Hi, I'm working now</h1>
        <div>
      
        </div>
      </div>
    );
  }
}
