import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoUserSubnav from './no_user_subnav';
import UserSubnav from './user_subnav';
import Logo from './_logo';
import UserIcon from './_user_icon';
import CartIcon from './_cart_icon';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const subnav = this.props.user ? 
      <UserSubnav logoutUser={this.props.logoutUser} /> :
      <NoUserSubnav user={this.props.user} />;
      
      
    return (
      <div id='header'>
        <ul id='header_left_menu'>
          <div></div>
        </ul>
        <Link id='main_logo' to='/'><Logo /></Link>
        <ul id='header_right_menu'>
          <li id='user_icon'>
            <UserIcon />
            { subnav }
          </li>
          <li id='cart_icon'>
            <CartIcon />
          </li>
        </ul>
      </div>
    )
  }
}
