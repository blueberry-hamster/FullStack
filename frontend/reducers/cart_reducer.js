import { RECEIVE_CART  } from "../actions/cart_actions";
import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from "../actions/cart_item_actions";
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartReducer = (state = { cartItems: {}, cartId: null}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  const emptyCart = { cartItems: {}, cartId: null };

  switch (action.type) {
    case RECEIVE_CART:
      const cartItems = Object.values(action.cart.cartItems);
      let subtotal = 0;
      let totalCount = 0;

      const numItems = cartItems.length;

      for (let i = 0; i < numItems; i++) {
        let item = cartItems[i];
        let itemPrice = item.product.price;

        subtotal += (item.quantity * itemPrice);
        totalCount += (item.quantity);
      }
      let taxRate = 0.08; //FIXME you can update taxrate based upon user address info
      let shippingCost = (subtotal === 0) ? 0 : 5.00; //FIXME can change shipping cost based on total in the future
      // const shippingCost = (subtotal === 0 || subtotal > 30) ? 0 : 5.00; //FIXME can change shipping cost based on total in the future
      subtotal = subtotal;
      let totalPrice = (subtotal + (subtotal * taxRate) + shippingCost);
      
      newState.cartItems = action.cart.cartItems;
      newState.cartId = action.cart.cartId;

      newState.shippingCost = shippingCost;
      newState.subtotal = subtotal;
      newState.totalPrice = totalPrice;
      newState.totalCount = totalCount;

      return newState;
    
    case RECEIVE_CART_ITEM:
      let productId = Object.keys(action.cartItem)[0];
      let cartItem = Object.values(action.cartItem)[0];
      let prevQuantity = (newState.cartItems[productId] ? newState.cartItems[productId].quantity : 0);
      totalCount = (newState.totalCount + (cartItem.quantity - prevQuantity));
      subtotal = (newState.subtotal + ((cartItem.quantity - prevQuantity) * cartItem.product.price));
      shippingCost = (subtotal === 0) ? 0 : 5.00;
      totalPrice = (subtotal + (subtotal * 0.08) + shippingCost);
      
      newState.cartItems[productId] = cartItem;
      newState.totalCount = totalCount;
      newState.subtotal = subtotal;
      newState.totalPrice = totalPrice;
      newState.shippingCost = shippingCost;
      
      return newState;
    
    case REMOVE_CART_ITEM:
      let item = Object.values(action.cartItem)[0];
      totalCount = newState.totalCount - item.quantity;
      subtotal = newState.subtotal - (item.quantity * item.product.price);
      shippingCost = (subtotal === 0) ? 0 : 5.00;
      totalPrice = (subtotal + (subtotal * 0.08) + shippingCost);
      
      delete newState.cartItems[Object.keys(action.cartItem)[0]];
      newState.shippingCost = shippingCost;
      newState.subtotal = subtotal;
      newState.totalPrice = totalPrice;
      newState.totalCount = totalCount;
      
      return newState;

    case LOGOUT_CURRENT_USER: // clear cart on logout
      return emptyCart;
      
    default:
      return state;
  }
};

export default cartReducer;