import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Router, browserHistory } from 'react-router-dom';

import Layout from './Layout';
import NotFoundPage from './NotFound';

import PersonIndex from './PersonIndex';
import SingleView from './SingleView';
import SearchFilter from './SearchFilter'
// import ManageData from './ManageData';

export class Routes extends React.Component {

  render(){
    return(
        <Layout>
          <Switch>
            <Route exact path="/" component={PersonIndex}/>
            <Route exact path="/show/:id" component={SingleView}/>
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
    );
  }
}
