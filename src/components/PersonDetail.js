import React, { Component } from 'react';
import { connect } from 'react-redux';
import
  {Panel,Clearfix,Grid,Row,Col,Button,Glyphicon}
from 'react-bootstrap';
import {Link} from 'react-router-dom';

import style from '../sass/style.scss';

class PersonDetail extends Component{
  constructor(props){
    super(props);
    //state will toggle class, main row for expanded, collapse row for collapsed
    console.log('PersonDetail props ', props);

    this.state = {
      collaseAll:false,
      rowStatus:'hidden-row',
      secret:'hidden'
    }
  }

  componentWillMount(){
      console.log('toggled? ', this.props.collapseAll)
      this.setState({
        collapseAll: this.props.collapseAll,
        rowStatus: this.props.collapseAll ? style['hidden-row'] : style['main-row']
      })
  }

    //moved from person index, detail components werent using new props
    //from index rerender triggered by collapseAll button state change
    componentWillReceiveProps(nextProps){
      console.log('index results nextProps... ', nextProps.collapseAll);
      console.log('index collapse prop ',this.props.collapseAll);
      if (nextProps.collapseAll !== this.state.collapseAll){
        this.setState({
          collapseAll: nextProps.collaseAll,
          rowStatus: nextProps.collapseAll ? style['hidden-row'] : style['main-row']
        })
      }
    }

  toggleRow(){
    (this.state.rowStatus == 'main-row') ?
      this.setState({rowStatus:'hidden-row'}) :
      this.setState({rowStatus:'main-row'});
  }

  render(){
    const person = this.props.person;
    if(!person){
      return(
        <div>
          ?
        </div>
      )
    }else{
      return(
        <Row className={`${this.state.rowStatus}`} key={person.ID}>
          <div className= {style["column-header"]}>
            <Link to={`/show/${person.ID}`}>
              {person['Last Name']}, {person['First Name']} ID: {person['ID']}
            </Link>
            <Button onClick={()=>this.toggleRow()} bsSize="xs">
              <Glyphicon glyph={(this.state.rowStatus == style['main-row'])?"minus":"plus"}/>
            </Button>
          </div>
          <div className={style['row-detail']}>
            <Name person={person} status={[...this.props.showColumns].includes("name-detail") ? style['name-detail']: style['hidden']}/>
            <Contact person={person} status={[...this.props.showColumns].includes("contact-detail") ? style['contact-detail'] : style['hidden']}/>
            <Location person={person}
              status={[...this.props.showColumns].includes("location-detail") ? style['location-detail'] : style['hidden']}/>
            <Secret person={person} status={this.state.secret}/>
          </div>
        </Row>
      )
    }
  }

}

const Name = props => {
  return(
    <div className={props.status}>
      <div>
        <h4>
          {props.person['First Name']}
          <b> {props.person['Last Name']}</b>
        </h4>
        <h4>
          {props.person['Job']}
        </h4>
      </div>
    </div>
  )
}

const Contact = props => {

  return(
    <div className={props.status}>
      <h4>Contact Information:</h4>
      <p>Email: {props.person['Email']}</p>
      <p>C Number: {props.person['C_Number']}</p>
    </div>
  )
}

const Location = props => {
  return(
    <div className={props.status}>
      <h4>Home Address:</h4>
      <p>
        {props.person['Address']}
      </p>
      <p>
        {props.person['City']}
      </p>
      <p>
        {props.person['State']}
      </p>
    </div>
  )
}

const Secret = props => {
  return (
    <div className={props.status}>
      <p>{props.person['SSN']}</p>
    </div>
  )
}

function mapStateToProps(state,ownProps){
  console.log('own props for row : ', ownProps)
  return{
    collapseAll:state.ui.collapsed,
    showColumns:state.ui.showColumns
  }
}

// export {Name,Contact,Location,Secret}

export default connect(mapStateToProps,{})(PersonDetail)
