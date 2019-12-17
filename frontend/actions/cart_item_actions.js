import * as CartItemApiUtil from "../util/cart_item_api_util";

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const receiveCartItem = cartItem => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

const removeCartItem = cartItemId => ({
  type: REMOVE_CART_ITEM,
  cartItemId
});

export const createCartItem = cartItemParams => dispatch => CartItemApiUtil.createCartItem(cartItemParams)
  .then(cartItem => dispatch(receiveCartItem(cartItem)));

export const updateCartItem = cartItemParams => dispatch => CartItemApiUtil.updateCartItem(cartItemParams)
  .then(cartItem => dispatch(receiveCartItem(cartItem)));

export const destroyCartItem = cartItemId => dispatch => CartItemApiUtil.destroyCartItem(cartItemId)
  .then( () => dispatch(removeCartItem(cartItemId)));