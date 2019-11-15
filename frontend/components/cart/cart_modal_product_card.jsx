import React from 'react';

const CartModalProductCard = props => {
  const product = props.product,
        price = product.price,
        name = product.name,
        imgUrl = product.clear_photo,
        quantity = props.quantity;

  return (
    <div className = 'cart-modal-product-card'>
      <div className='product-display'>
        <div className='product-description'>
          <p>{ `${ quantity }x ${  }` }</p>
        </div>
        <div className='product-photo'>

        </div>
      </div>
      <div className='edit-remove-buttons'>

      </div>
    </div>
  );
}

export default CartModalProductCard;

