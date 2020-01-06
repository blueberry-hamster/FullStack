import { connect } from 'react-redux';
import Splash from './splash';
import { createCartItem, updateCartItem, updateTempCartItem } from "../../actions/cart_item_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    products: state.entities.products,
    cart: state.entities.cart,
    user: state.entities.users[state.session.id],
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  createCartItem: cart_item => dispatch(createCartItem(cart_item)),
  updateCartItem: cart_item => dispatch(updateCartItem(cart_item)),
  updateTempCartItem: cart_item => dispatch(updateTempCartItem(cart_item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);