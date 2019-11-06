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
    this.validateEmail = this.validateEmail.bind(this);
  }

  componentDidMount() {
    
  }
  
  validateEmail() {
    const properEmail = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return properEmail.test(this.state.email) ? true : false;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state)
      .then(() => this.props.history.push('/'))
      .fail(err => {
        let $p = $('.form_input_container p');
        $p.addClass('show');
        this.setState({ session_errors: this.props.errors[0] });
      });
  }

  handleInput(key) {
    return e => {
      // handle checking for valid email
      if (key === 'email') {
        let valid = this.validateEmail(),
            $input = $('#email');
        !valid ? $input.addClass('invalid') : $input.removeClass('invalid');
      }

      this.setState({ [key]: e.currentTarget.value
      })};
  }

  render() {
    return (
      <div className='signup session'>
        <h1>Sign in</h1>
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
            <p className='password_warning session_errors'>
              Please enter a correctly formatted email address.
            </p>
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
            <p className='session_errors'>
              {
                this.state.session_errors
              }
            </p>
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

