import { connect } from 'react-redux';
import Checkout from './checkout';
import { newOrder } from "../../actions/order_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.entities.cart,
    currentUser: state.entities.users[state.session.id],
    orders: state.entities.orders
  };
};

const mapDispatchToProps = dispatch => ({
  newOrder: userId => dispatch(newOrder(userId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);