import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { getCart } from "../../actions/cart_actions";
import { openModal } from "../../actions/modal_actions";
import Header from './header';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
  cart: state.entities.cart
});

const mapDispatchToProps = dispatch => ({
  logoutUser: user => dispatch(logoutUser(user)),
  openModal: modal => dispatch(openModal(modal)),
  getCart: () => dispatch(getCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);