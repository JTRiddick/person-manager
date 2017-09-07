import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import
  {Panel,Clearfix,ButtonToolbar,ButtonGroup,Button} from 'react-bootstrap';
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
          <h2>{person['ID']}</h2>
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
