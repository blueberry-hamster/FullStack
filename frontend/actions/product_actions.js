import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const receiveProducts = payload => ({
  type: RECEIVE_PRODUCTS,
  payload
});

// FIXME change to payload with all the info
const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const getProducts = () => dispatch => ProductApiUtil.getProducts()
  .then(payload => dispatch(receiveProducts(payload)));

export const getProduct = name => dispatch => ProductApiUtil.getProduct(name)
  .then(product => dispatch(receiveProduct(product)));