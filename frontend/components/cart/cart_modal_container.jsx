import { connect } from 'react-redux';
import CartModal from './cart_modal';
import { getCart } from "../../actions/cart_actions";
import { destroyCartItem, updateCartItem, updateTempCartItem, removeTempCartItem } from "../../actions/cart_item_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
  cart: state.entities.cart,
  products: state.entities.products,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  updateCartItem: (params) => dispatch(updateCartItem(params)),
  destroyCartItem: (cartItemId) => dispatch(destroyCartItem(cartItemId)),
  closeModal: () => dispatch(closeModal()),
  removeTempCartItem: cartItem => (removeTempCartItem(cartItem)),
  updateTempCartItem: cartItem => dispatch(updateTempCartItem(cartItem)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartModal);