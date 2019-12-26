import { RECEIVE_CART  } from "../actions/cart_actions";
import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from "../actions/cart_item_actions";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_IP_SESSION } from '../actions/session_actions';

const cartReducer = (state = { cartItems: {}, cartId: null}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  const emptyCart = { cartItems: {}, cartId: null };

  switch (action.type) {
    case RECEIVE_CART:
      newState.cartItems = action.cart.cartItems;
      newState.cartId = action.cart.cartId;
      return newState;
    
    case RECEIVE_CART_ITEM:
      let productId = Object.keys(action.cartItem)[0];
      let cartItem = Object.values(action.cartItem)[0];
      newState.cartItems[productId] = cartItem;
      return newState;
    
    case REMOVE_CART_ITEM:
      delete newState.cartItems[Object.keys(action.cartItem)[0]];
      return newState;

    case LOGOUT_CURRENT_USER: // clear cart on logout
      return emptyCart;
      
    default:
      return state;
  }
};

export default cartReducer;