import { connect } from 'react-redux';
import Checkout from './checkout';
import { getOrder, getOrders } from "../../actions/order_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.entities.cart,
    currentUser: state.entities.users[state.session.id],
    orders: state.entities.orders
  };
};

const mapDispatchToProps = dispatch => ({
  getOrder: orderId => dispatch(getOrder(orderId)),
  getOrders: userId => dispatch(getOrders(userId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);