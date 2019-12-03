import { OPEN_CART_MODAL, CLOSE_CART_MODAL } from "../actions/cart_actions";

const uiReducer = (state = {cartModalOpen: false}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case OPEN_CART_MODAL:
      newState.ui.cartModalOpen = true;
      return newState;

    case CLOSE_CART_MODAL:
      newState.ui.cartModalOpen = false;
      return newState;

    default:
      return state;
  }
}

export default uiReducer;