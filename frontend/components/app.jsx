import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import Header from './header/header_container';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './user_auth/login_form_container';
import SignupFormContainer from './user_auth/signup_form_container';
import FooterContainer from './footer/footer_container';

import SplashContainer from './splash/splash_container';
import ProductIndexContainer from './product_index/product_index_container';
import ProductShowContainer from './product_show/product_show_container';

const App = () => (
  <div>
    <Header />
    <NavbarContainer />

    <Switch>
      <AuthRoute path='/signin' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Route path='/products/:category?' component={ProductIndexContainer} />
      <Route path='/product/:name' component={ProductShowContainer} />
      {/* <Route path='/products/:id' component={ProductShowContainer} /> */}
      {/* <Route exact path='/' component={SplashContainer} /> */}
    </Switch>

    <FooterContainer />
  </div>
);

export default App;