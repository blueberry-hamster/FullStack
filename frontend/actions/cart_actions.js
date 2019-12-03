import * as CartApiUtil from "../util/cart_api_util";

export const RECEIVE_CART = 'RECEIVE_CART';
export const OPEN_CART_MODAL = 'OPEN_CART_MODAL';
export const CLOSE_CART_MODAL = 'CLOSE_CART_MODAL';

const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
});

const openCart = () => ({
  type: OPEN_CART_MODAL
});

const closeCart = () => ({
  type: CLOSE_CART_MODAL
});

export const getCart = cartId => dispatch => CartApiUtil.getCart(cartId)
  .then(cart => dispatch(receiveCart(cart)));

export const openCartModal = () => dispatch(openCart());
export const closeCartModal = () => dispatch(closeCart());