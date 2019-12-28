import { connect } from 'react-redux';
import Checkout from './checkout';
import { newOrder } from "../../actions/order_actions";
import { getCart } from "../../actions/cart_actions";
// import {  } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.entities.cart,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  newOrder: userId => dispatch(newOrder(userId)),
  getCart: () => dispatch(getCart()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);