import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import Header from './header/header_container';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './user_auth/login_form_container';
import SignupFormContainer from './user_auth/signup_form_container';

import SplashContainer from './splash/splash_container';
import ProductIndexContainer from './product/product_index_container';

const App = () => (
  <div>
    <Header />
    <NavbarContainer />

    <AuthRoute path='/signin' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <Route path='/products/:category?' component={ProductIndexContainer} />
    {/* <Route exact path='/' component={SplashContainer} /> */}
  </div>
);

export default App;