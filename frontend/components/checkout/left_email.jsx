import React from 'react';
import { CheckoutContext } from "./checkout";

export default function Email(props) {
  debugger;
  const context = CheckoutContext;
  return (
    <div className='email-container'>
      <h4>email</h4>
      <p>{ context.currentUser.email }</p>
    </div>
  )
}
