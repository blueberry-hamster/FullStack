import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { getCart } from "../../actions/cart_actions";
import { openModal } from "../../actions/modal_actions";
import { getIpAddress } from '../../actions/session_actions';
import { getDefaultCart } from "../../actions/cart_actions";
import { getCategories } from "../../actions/category_actions";
import { getProducts } from "../../actions/product_actions";
import Header from './header';

const mapStateToProps = (state) => {
  return {
  user: state.entities.users[state.session.id],
  cart: state.entities.cart,
  session: state.session,
  };
};

const mapDispatchToProps = dispatch => ({
  logoutUser: user => dispatch(logoutUser(user)),
  openModal: modal => dispatch(openModal(modal)),
  getCart: userId => dispatch(getCart(userId)),
  getIp: () => dispatch(getIpAddress()),
  getDefaultCart: ip => dispatch(getDefaultCart(ip)),
  getProducts: () => dispatch(getProducts()),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);