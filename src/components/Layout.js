import React from 'react';
import {  withRouter } from 'react-router-dom';
import {  PageHeader } from 'react-bootstrap';

import PageControls from './PageControls';
import SearchFilter from './SearchFilter';
import {NavigationComponent} from './Navigation'

export const Layout = props => {
  console.log('layout props ', {...props});
  return(
    <div className="app-container">
      <header>
        <PageHeader>
            HR <small>Demense Portal</small>
        </PageHeader>
        <section id="navigation-container">
          <NavigationComponent
            history={props.history}
          />
        </section>
        <section className="page-controls">
          <PageControls history={props.history}/>
        </section>
      </header>

      <div className="app-content">
        {props.children}
      </div>

      <footer>
        <SearchFilter className="search-filter" history={props.history}/>
      </footer>
    </div>
  )
}
const RoutedLayout = withRouter(Layout)
export default RoutedLayout;
