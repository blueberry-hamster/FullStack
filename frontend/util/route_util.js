import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={
      props => !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.entities.users[state.session.id])
})

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
);