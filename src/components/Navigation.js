import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import { Nav, Navbar, NavItem, Button, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const NavigationComponent = props => {
  console.log("Navigation component props :", props);

  if(props.history.location.pathname === "/"){
    return(
      <Navbar>
        <Nav bsStyle='pills'>
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
      </Navbar>)
    }
  return(
    <Navbar>
      <LinkContainer to="/">
        <Button bsStyle='primary'>Return to List</Button>
      </LinkContainer>
    </Navbar>
  )

}
