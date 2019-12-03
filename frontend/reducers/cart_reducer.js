import { RECEIVE_CART  } from "../actions/cart_actions";
import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from "../actions/cart_item_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CART:
      return action.cart;
    
    case RECEIVE_CART_ITEM:
      newState.entities.cart[action.cartItem.id] = action.cartItem;
      return newState;
    
    case REMOVE_CART_ITEM:
      delete newState.entities.cart[action.cartItemId];
      return newState;
      
    default:
      return state;
  }
}

export default cartReducer;