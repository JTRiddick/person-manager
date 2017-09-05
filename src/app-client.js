/* global window document */

import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import { Routes } from './components/Routes';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/index';

let store;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(/* middleware,middleware */)
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Routes />
    </Router>
  </Provider>
, document.getElementById('main'));
