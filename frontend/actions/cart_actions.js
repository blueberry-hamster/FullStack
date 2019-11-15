import * as CartApiUtil from "../util/cart_api_util";

export const RECEIVE_CART = 'RECEIVE_CART';

const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
})

export const getCart = cartId => dispatch => CartApiUtil.getCart(cartId)
  .then(cart => dispatch(receiveCart(cart)));