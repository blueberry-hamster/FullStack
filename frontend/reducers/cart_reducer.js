import { RECEIVE_CART  } from "../actions/cart_actions";
import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from "../actions/cart_item_actions";

const cartReducer = (state = { cartItems: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  

  switch (action.type) {
    case RECEIVE_CART:
      newState.cartId = action.cart.cartId;
      return newState;
    
    case RECEIVE_CART_ITEM:
      debugger
      let productId = Object.keys(action.cartItem)[0];
      let cartItem = Object.values(action.cartItem)[0];
      newState.cartItems[productId] = cartItem;
      return newState;
    
    case REMOVE_CART_ITEM:
      delete newState.cartItems[Object.keys(action.cartItem)[0]];
      return newState;
      
    default:
      return state;
  }
};

export default cartReducer;