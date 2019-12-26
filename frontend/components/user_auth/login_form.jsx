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
    this.handleDemo = this.handleDemo.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }
  
  validateEmail() {
    const properEmail = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return properEmail.test(this.state.email) ? true : false;
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.loginUser(this.state)
      .then(() => {
        this.props.getCart();
        this.props.history.push('/');
      })
      .fail(() => {
        const $input = $('#password');
        $input.addClass('invalid');
      });
  }

  handleInput(key) {
    return e => {
      // handle checking for valid email
      const valid = this.validateEmail();
      if (key === 'email') {
        const $input = $('#email');
        !valid ? $input.addClass('invalid') : $input.removeClass('invalid');
      }

      // check if button can be enabled
      const $btn = document.getElementById("submit_btn");
      if (valid && this.state.password.length > 5) { 
        $btn.disabled = false; 
      } else {
        $btn.disabled = true; 
      }

      // update state
      this.setState({ [key]: e.currentTarget.value
      });};
  }

  handleDemoLogin(email, password) {
    let that = this;
    if (email.length > 0) {
      this.setState({
        email: this.state.email += email.shift()
      }, 
      () => setTimeout(() => {
        this.handleDemoLogin(email, password);
      }, 100));
    } else if (password.length > 0) {
      this.setState({
        password: this.state.password += password.shift()
      }, 
      () => setTimeout(() => {
        this.handleDemoLogin(email, password);
      }, 100));
    } else {
      this.props.loginUser(this.state)
        .then(() => {
          that.props.getCart();
          that.props.history.push('/');
        });

    }
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({ email: '', password: '' }, () => {
      const email ='tomato@gmail.com'.split('');
      const password ='password'.split('');
      this.handleDemoLogin(email, password);
    });
  }

  render() {
    return (
      <div className='signup session'>
        <h1>Sign in</h1>
        <form onSubmit={this.handleSubmit}>
          
          <div className='form_input_container'>
            <input
              type="text"
              id='email'
              value={this.state.email}
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
              value={this.state.password}
              onChange={this.handleInput('password')}
              maxLength='100'
              minLength='0'
              className={this.state.password.length > 0 ? 'has_input' : ''}
            />
            <label className='text_field_label'>
              <span>Password</span>
            </label>
            <p className='session_errors'>
              {
                this.props.errors[this.props.errors.length - 1]
              }
            </p>
          </div>
          
          <button 
            id='submit_btn' 
            type="submit" 
            disabled
          >
            <div>SIGN IN</div>
          </button>

          <button id='demo_login_btn' onClick={this.handleDemo}>
            DEMO LOGIN
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

