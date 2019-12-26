import React from 'react';
import { CheckoutConsumer } from "./checkout";

export default function Email(props) {
  debugger
  return (
    <CheckoutConsumer>
      <div className='email-container'>
        <h4>email</h4>
        <p>{ props.currentUser.email }</p>
      </div>
    </CheckoutConsumer>
  )
}
