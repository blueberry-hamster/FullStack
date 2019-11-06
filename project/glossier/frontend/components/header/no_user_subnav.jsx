import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class NoUserSubnav extends Component {
  render() {
    return (
      <ul className='user_dropdown'>
        <li>
          <Link to='/signup'>Create an Account</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
      </ul>
    )
  }
}
