import React from 'react';
import CartModalProductCard from './cart_modal_product_card';

const CartModalBody = props => {
  
  return (
    <div id='cart-modal-body-container'>
      <div className='product-card-container'>
        {
          props.cartItems.map((item, i) => 
            <CartModalProductCard 
              key={i}
              cartItemId={item.id}
              cartId={props.cartId}
              product={props.products[item.product_id]}
              quantity={item.quantity}
              updateCartItem={props.updateCartItem}
              destroyCartItem={props.destroyCartItem}
            />
          )
        }
      </div>

      <div className='divider'>
      </div>

      <div className='cost-display'>

        <div className='item subtotal'>
          <p>Subtotal</p>
          <p>{`$${ props.subtotal }`}</p>
        </div>

        <div className='item tax'>
          <p>Tax</p>
          <p>{`$${(props.subtotal * props.taxRate).toFixed(2)}`}</p>
        </div>

        <div className='item shipping'>
          <p>Shipping</p>
          <p>{`$${ props.shippingCost }`}</p>
        </div>
        
      </div>
    </div>
  );
}

export default CartModalBody;
