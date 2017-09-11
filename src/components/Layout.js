import React from 'react';
import { Link, withRouter, NavLink, Route } from 'react-router-dom';
import { Nav, Navbar, NavItem, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import PageControls from './PageControls';
import SearchFilter from './SearchFilter';

export const Layout = props => {
  return(
    <div className="app-container">
      <header>
        <PageHeader>
            HR <small>Demense Portal</small>
        </PageHeader>
        <section id="navigation-container">
          <Navbar>
            <Nav>
              <LinkContainer to="/">
                <NavItem>View All Data</NavItem>
              </LinkContainer>
              <LinkContainer to="/SearchFilter">
                <NavItem>Search/Filter</NavItem>
              </LinkContainer>
              <LinkContainer to="/Data">
                <NavItem>Manage Data</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>
          <section className="page-controls">
            <PageControls history={props.history}/>
          </section>
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
