import React from 'react';

const CartModalTopbar = props => {
  let numItems = Object.values(props.cart).length - 1;

  return (
    <div id='cart-modal-topbar-container'>
      <div className='left-container'>
        <button onClick={() => props.closeModal()}>
          <svg id="base-ui-close" viewBox="0 0 16 16"><path clipRule="evenodd" d="M15.78.22a.75.75 0 0 1 0 1.06L9.06 8l6.72 6.72a.75.75 0 1 1-1.06 1.06L8 9.06l-6.72 6.72a.75.75 0 0 1-1.06-1.06L6.94 8 .22 1.28A.75.75 0 1 1 1.28.22L8 6.94 14.72.22a.75.75 0 0 1 1.06 0z" fillRule="evenodd"></path></svg>
        </button>
        <span>
          Your Bag
        </span>
      </div>

      <div className='right-container'>
        <span>{`${numItems} items`}</span>
      </div>
    </div>
  );
}

export default CartModalTopbar;
