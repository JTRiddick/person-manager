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
        <Panel id={style.singleview}>
          <h4>{person['ID']}</h4>
          <div>
            <h3>
              <b>{person['First Name']} {person['Last Name']}</b>
            </h3>
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
        </Panel>
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
