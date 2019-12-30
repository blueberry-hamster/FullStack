
import React from 'react';
import { withRouter } from "react-router-dom";
import PeaceIcon from './peace_icon';

function Header(props) {
  return (
    <div className='left-header-container'>
      <h1>Checkout
        <PeaceIcon/>
      </h1>
      <span
        onClick={() => props.history.push('/products')}
      >Back to Shopping</span>
    </div>
  )
}
export default withRouter(Header);