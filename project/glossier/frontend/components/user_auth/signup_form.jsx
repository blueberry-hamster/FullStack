import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
    this.props.history.push('/');
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.currentTarget.value });
  }
  
  render() {
    return (
      <div className='signup'>
        <h1>Create an Account</h1>
        <form>
          <input 
            type="text" 
            id='first_name'
            placeholder="First Name" 
            onChange={this.handleInput('first_name')}
            maxLength='100'
            minLength='0'
          />
          {/* <label for='first_name' class='text_field_label'>
            <span>First Name</span>
          </label> */}

          <input 
            type="text" 
            id='last_name'
            placeholder="Last Name" 
            onChange={this.handleInput('last_name')}
            maxLength='100'
            minLength='0'
          />
          {/* <label for='last_name' class='text_field_label'>
            <span>First Name</span>
          </label> */}

          
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
            Sign Up
          </button>

        </form>
        <p>
          Already have an account?
        </p>
        <Link to='/login'>Sign in!</Link>
      </div>
    )
  }
}
