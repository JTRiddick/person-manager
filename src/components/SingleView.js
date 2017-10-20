import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import
  {Panel,Clearfix,ButtonToolbar,ButtonGroup,Button} from 'react-bootstrap';
import { getOne, resetResults } from '../actions';

import style from '../sass/singleViewStyle.scss';


class SingleView extends Component{

  constructor(){
    super();
  }

  componentDidMount(){
    console.log('individual view mounted with props ;', this.props)
    if(!this.props.person){
      const {id} = this.props.match.params;
      this.props.getOne(id);
    }else if (!this.props.match.params) {
      //individual search results
      console.log('no params okay')
    }

  }

  componentWillUnmount(){
    this.props.resetResults();
  }

  render(){
    const { person } = this.props;
    if (person){
      return (
        <Panel id={style.singleview}>
          <h4>{person['ID']}</h4>
          <div className={style.name}>
            <h3>
              <b>{person['First Name']} {person['Last Name']}</b>
            </h3>
            <h4>
              {person['Job']}
            </h4>
          </div>
          <div className={style.contact}>
            <p>{person['Email']}</p>
            <p>{person['C_Number']}</p>
          </div>
          <div className={style.location}>
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
        </Panel>
      );
    } else {
      return(
        <Panel header="There's a Problem!" bsStyle="warning">
          <p>Person not found...</p>
        </Panel>
      )
    }


  }

}

const mapStateToProps = (state,ownProps) => {
  return {person:state.people[ownProps.match.params.id || 0]}
}

export default connect(mapStateToProps,{getOne,resetResults})(SingleView);
