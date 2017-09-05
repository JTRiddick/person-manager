import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = props => {
  return(
    <div>
      <h1>
        Page Not Found!
      </h1>
      <h6>
        Sorry about that
      </h6>
      <p>
        <Link to="/">Go back to the main page</Link>
      </p>
    </div>
  )
}

export default NotFoundPage;
