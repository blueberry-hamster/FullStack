import React from 'react';

export default function Email(props) {
  return (
    <div className='email-container'>
      <h4>email</h4>
      <p>{ props.currentUser.email }</p>
    </div>
  )
}
