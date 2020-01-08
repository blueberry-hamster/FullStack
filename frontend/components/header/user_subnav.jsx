import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class UserSubnav extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout() {
    const that = this;
    this.props.logoutUser();
    this.props.getIp().then(
      res => {
        debugger
        that.props.getDefaultCart(res.ip)
      }
    );
  }
  
  render() {
    return (
      <ul className='user_dropdown'>
        <li>
          <Link to='/orders' >Order History</Link>
        </li>
        <li>
          <Link to='/' onClick={ this.handleLogout }>Sign Out</Link>
        </li>
      </ul>
    )
  }
}
