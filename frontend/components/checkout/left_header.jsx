
import React from 'react';
import PeaceIcon from './peace_icon';

export default function Header() {
  return (
    <div className='left-header-container'>
      <h1>Checkout
        <PeaceIcon/>
      </h1>
      <span>Back to Shopping</span>
    </div>
  )
}
