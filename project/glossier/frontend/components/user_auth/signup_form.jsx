import React, { Component } from 'react'
import RequiredFieldWarning from './_required_field_warning';
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
    this.addWarningIfEmpty = this.addWarningIfEmpty.bind(this);
  }

  componentDidMount() {
    // remove invalid tags if they try to sign up again with invalid inputs
    let fields = ['email', 'password'];
    fields.forEach(field => $(`#${field}`).removeClass('invalid'));
  }

  // add errors if user submitted invalid inputs
  addWarningIfEmpty(field, $element) {
    if (this.state[field].length < 1) {
      $element.addClass('invalid')
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'))
      .fail(() => {
        let fields = ['email', 'password'];
        fields.forEach(field => this.addWarningIfEmpty(field, $(`#${field}`)))
      })
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.currentTarget.value });
  }
  
  render() {
    return (
      <div className='signup session'>
        <h1>Create an account</h1>
        <form>
          <div className='form_input_container'>
            <input 
              type="text" 
              id='first_name'
              onChange={this.handleInput('first_name')}
              maxLength='100'
              minLength='0'
              className={this.state.first_name.length > 0 ? 'has_input' : ''}
            />
            <label className='text_field_label'>
              <span>First Name</span>
            </label>
          </div>
          
          <div className='form_input_container'>
            <input 
              type="text" 
              id='last_name'
              onChange={this.handleInput('last_name')}
              maxLength='100'
              minLength='0'
              className={this.state.last_name.length > 0 ? 'has_input' : ''}
            />
            <label className='text_field_label'>
              <span>First Name</span>
            </label>
          </div>

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
            <RequiredFieldWarning field='email' />  
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
            <RequiredFieldWarning field='password' />
          </div>
          
          <button id='submit_btn' type="submit" onClick={this.handleSubmit}>
            SIGN UP
          </button>

        </form>
        <div className='switch_session_page'>
          <p>
            Already have an account?
          </p>
        <Link to='/signin'>Sign in!</Link>
        </div> 
      </div>
    )
  }
}
