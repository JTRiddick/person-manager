import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const Layout = props => {
  return(
    <div className="app-container">
      <header>

      </header>
      <div className="app-content">
        {props.children}
      </div>
      <footer>

      </footer>
    </div>
  )
}
const RoutedLayout = withRouter(Layout)
export default RoutedLayout;
