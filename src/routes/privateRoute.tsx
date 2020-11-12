import React, { FC } from 'react';
// import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { userAuthenticated } from 'redux/auth/selectors';

interface IPrivateRoute {
  component: any;
  path: string;
  rest?: Record<string, unknown>;
  exact?: boolean;
}

const PrivateRoute: FC<IPrivateRoute> = ({ component: Component, ...rest }) => {
  //   const isAuthenticated = useSelector(userAuthenticated);
  const isAuthenticated = false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export { PrivateRoute };
