import { RECEIVE_PRODUCTS} from "../actions/product_actions";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.payload.products;
  
    default:
      return state;
  }
}

export default productsReducer;