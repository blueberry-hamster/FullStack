import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class UserSubnav extends Component {
  render() {
    return (
      <ul className='user_dropdown'>
        <li>
          <Link to='/orders' >Order History</Link>
        </li>
        <li>
          <Link to='/' onClick={this.props.logoutUser}>Sign Out</Link>
        </li>
      </ul>
    )
  }
}
