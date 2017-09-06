import React from 'react';
import { Link, withRouter, NavLink, Route } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import  PageControls  from './PageControls';

export const Layout = props => {
  return(
    <div className="app-container">
      <header>
        <section id="navigation-container">
          <Navbar>
            <Nav>
              <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/PersonIndex">
                <NavItem>View All Data</NavItem>
              </LinkContainer>
              <LinkContainer to="/FilterList">
                <NavItem>Search/Filter</NavItem>
              </LinkContainer>
              <LinkContainer to="/Data">
                <NavItem>Manage Data</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>
        </section>
      </header>
      <div className="app-content">
        {props.children}
      </div>
      <section className="page-controls">
        <PageControls />
      </section>
      <footer>

      </footer>
    </div>
  )
}
const RoutedLayout = withRouter(Layout)
export default RoutedLayout;
