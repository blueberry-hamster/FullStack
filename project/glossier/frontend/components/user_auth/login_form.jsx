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
      <div className='signup session'>
        <h1>Sign In</h1>
        <form>
          <div className='form_input_container'>
            <input
              type="text"
              id='email'
              onChange={this.handleInput('email')}
              maxLength='100'
              minLength='0'
              className={this.state.email.length > 0 ? 'has_input' : ''}
            />
            <label className='text_field_label'>
              <span>Email</span>
            </label>
          </div>

          <div className='form_input_container'>
            <input
              type="password"
              id='password'
              onChange={this.handleInput('password')}
              maxLength='100'
              minLength='0'
              className={this.state.password.length > 0 ? 'has_input' : ''}
            />
            <label className='text_field_label'>
              <span>Create a Password</span>
            </label>
          </div>
          
          <button type="submit" onClick={this.handleSubmit}>
            <div>SIGN IN</div>
          </button>

        </form>
        <div className='switch_session_page'>
          <p>
            Don't have an account yet?
          </p>
          <Link to='/signup'>Create one!</Link>
        </div>
      </div>
    )
  }
}

