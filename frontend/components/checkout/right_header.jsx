import React from 'react';

const Header = (props) => {
  const count = props.cart.totalCount;
  
  return (
    <div className='right-header-container'>
      <p>
        Order Summary - { count } item{ count > 1 ? 's' : '' }
      </p>
      <div className='divider'></div>
    </div>
  );
}

export default Header;
