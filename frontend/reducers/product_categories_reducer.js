import { RECEIVE_PRODUCTS } from '../actions/product_actions';

const productCategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.payload.productCategories;

    default:
      return state;
  }
}

export default productCategoriesReducer;