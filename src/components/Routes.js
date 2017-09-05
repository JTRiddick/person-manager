import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Router, browserHistory } from 'react-router-dom';

import Index from './Index';
import Layout from './Layout';
import NotFoundPage from './NotFound';

export class Routes extends React.Component {

  render(){
      console.log('routes props :', this.props)
    return(
        <Layout>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
    );
  }
}
