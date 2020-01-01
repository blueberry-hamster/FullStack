import React from 'react';

export default function ProductCard(props) {
  if (!props.product) return null;
  
  const product = props.product,
    price = product.price,
    name = product.name,
    imgUrl = product.clear_photo,
    quantity = props.quantity;
  
  return (
    <div className='product-card'>

      <div className='product-display'>

        <div className='product-description'>
          <p>{`${quantity}x ${name}`}</p>
          <span>{`$${price}`}</span>
        </div>

        <div className='product-photo'>
          <img src={imgUrl} alt={`photo of ${name}`} />
        </div>

      </div>

    </div>
  )
}
