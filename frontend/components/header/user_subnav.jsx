import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class UserSubnav extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout() {
    const that = this;
    let ip = `${Math.floor(Math.random() * 255) + 1
      }.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    this.props.logoutUser()
    .then(
      // res => this.props.getIp().then(
      //   res => {
      //     that.props.getDefaultCart(res.ip);
      //   }
      // )
      res => that.props.getDefaultCart(ip)
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
