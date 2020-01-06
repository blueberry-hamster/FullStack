import * as OrderApiUtil from '../util/order_api_util';
// import { receiveCart } from "../actions/cart_actions";

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';

const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
});

const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

export const getOrder = orderId => dispatch => OrderApiUtil.getOrder(orderId)
  .then(order => {
    dispatch(receiveOrder(order));
  });

export const getOrders = userId => dispatch => OrderApiUtil.getOrders(userId)
  .then(orders => {
    dispatch(receiveOrders(orders));
  });

export const newOrder = orderParams => dispatch => OrderApiUtil.newOrder(orderParams);
  // .then( () => dispatch(receiveCart()));
  // .then(order => dispatch(receiveOrder(order)));