import * as CartApiUtil from "../util/cart_api_util";

export const RECEIVE_CART = 'RECEIVE_CART';

const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
});

export const getCart = () => dispatch => CartApiUtil.getCart()
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