/* global window document */

import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import { Routes } from './components/Routes';


ReactDOM.render(
  <Router history={browserHistory}>
    <Routes />
  </Router>
, document.getElementById('main'));
