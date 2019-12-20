import { connect } from 'react-redux';
import CartModal from './cart_modal';
import { destroyCartItem, updateCartItem } from "../../actions/cart_item_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
  cart: state.entities.cart,
  products: state.entities.products,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  updateCartItem: (params) => dispatch(updateCartItem(params)),
  destroyCartItem: (cartItemId) => dispatch(destroyCartItem(cartItemId)),
  closeModal: () => dispatch(closeModal()),
  // checkout: cart => dispatch(checkout(cart))
});


export default connect(mapStateToProps, mapDispatchToProps)(CartModal);