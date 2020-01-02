import { connect } from "react-redux";
import Orders from './orders';
import { getOrders } from "../../actions/order_actions";

const mapStateToProps = state => ({
  orders: state.entities.orders,
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  getOrders: userId => dispatch(getOrders(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);