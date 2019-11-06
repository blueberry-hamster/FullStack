import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state);
    this.props.history.push('/');
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.currentTarget.value });
  }

  render() {
    return (
      <div className='signup'>
        <h1>Sign In</h1>
        <form>
          <input
            type="text"
            id='email'
            placeholder="Email Address"
            onChange={this.handleInput('email')}
            maxLength='100'
            minLength='0'
          />
          {/* <label for='email' class='text_field_label'>
            <span>Email</span>
          </label> */}

          <input
            type="password"
            id='password'
            placeholder="Create a Password"
            onChange={this.handleInput('password')}
            maxLength='100'
            minLength='0'
          />
          {/* <label for='password' class='text_field_label'>
            <span>Create a Password</span>
          </label> */}

          <button type="submit" onClick={this.handleSubmit}>
            Sign In
          </button>

        </form>
        <p>
          Don't have an account yet?
        </p>
        <Link to='/signup'>Create one!</Link>
      </div>
    )
  }
}

