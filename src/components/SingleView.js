import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import { getOne } from '../actions';

import style from '../sass/style.scss';


class SingleView extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('individual view mounted with props ;', this.props)
    if(!this.props.person){
      const {id} = this.props.match.params;
      this.props.getOne(id);
    }

  }

  render(){
    const { person } = this.props;
    if (person){
      return (
        <div id={style.singleview}>
          <h1>{person['First Name']}</h1>
        </div>
      );
    } else {
      return(
        <Panel header="There's a Problem!" bsStyle="warning">
          <p>Loading...</p>
        </Panel>
      )
    }


  }

}

const mapStateToProps = (state,ownProps) => {
  return {person:state.people[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{getOne})(SingleView);
