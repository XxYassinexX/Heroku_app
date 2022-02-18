import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = ({ component: Component, auth, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        !auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

export default UnauthenticatedRoute;