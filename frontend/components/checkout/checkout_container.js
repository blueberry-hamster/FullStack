import { connect } from 'react-redux';
import Checkout from './checkout';
import { newOrder } from "../../actions/order_actions";
import { getCart } from "../../actions/cart_actions";
import { getProducts } from "../../actions/product_actions";
// import {  } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.entities.cart,
    currentUser: state.entities.users[state.session.id],
    products: state.entities.products,
  };
};

const mapDispatchToProps = dispatch => ({
  newOrder: (order) => dispatch(newOrder(order)),
  getCart: () => dispatch(getCart()),
  getProducts: () => dispatch(getProducts()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);