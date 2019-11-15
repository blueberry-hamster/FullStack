import React from 'react';
import CartModalProductCard from './cart_modal_product_card';

const CartModalBody = props => {
  let total = 0;
  props.cart.items.foreach(item => total += (item.quantity * item.price));
  let taxRate = 0.8; //FIXME you can update taxrate based upon user address info
  let shippingCost = 5; //FIXME can change shipping cost based on total in the future
  
  return (
    <div id='cart-modal-body-container'>
      <div className='product-card-container'>
        {
          cart.items.map((item, i) => 
            <CartModalProductCard 
              key={i}
              product={item.product}
              quantity={item.quantity}
            />
          )
        }
      </div>

      <div className='cost-display'>

        <div className='subtotal'>
          <p>Subtotal</p>
          <p>{`$${ total }`}</p>
        </div>

        <div className='tax'>
          <p>Tax</p>
          <p>{`$${ total + (total * taxRate) }`}</p>
        </div>

        <div className='shipping'>
          <p>Shipping</p>
          <p>{`$${ shippingCost }`}</p>
        </div>
        
      </div>
    </div>
  );
}

export default CartModalBody;
