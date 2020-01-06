import * as CartApiUtil from "../util/cart_api_util";

export const RECEIVE_CART = 'RECEIVE_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
});

export const getCart = () => dispatch => CartApiUtil.getCart()
.then(cart => {
  dispatch(receiveCart(cart));
});

export const cleanCart = (id) => dispatch => CartApiUtil.cleanCart(id)
.then(cart => {
  dispatch(receiveCart(cart));
});

export const getDefaultCart = ip => dispatch(receiveCart({
  cartId: ip,
  cartItems: {} 
}));

// export const newCart = userId => dispatch => CartApiUtil.newCart(userId)
//   .then(cart => dispatch(receiveCart(cart)));

// export const getCart = (userId) => dispatch => CartApiUtil.getCart(userId)
//   .then(cart => dispatch(receiveCart(cart)));