import { connect } from 'react-redux';
import CartModal from './cart_modal';
import { getCart } from '../../actions/cart_actions';
import { destroyCartItem, updateCartItem } from "../../actions/cart_item_actions";
import { closeModal } from "../../actions/modal_actions";
import { getProducts } from "../../actions/product_actions";

const mapStateToProps = state => ({
  cart: state.entities.cart,
  products: state.entities.products,
});

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  getProducts: () => dispatch(getProducts()),
  updateCartItem: (params) => dispatch(updateCartItem(params)),
  destroyCartItem: (cartItemId) => dispatch(destroyCartItem(cartItemId)),
  closeModal: () => dispatch(closeModal()),
  // checkout: cart => dispatch(checkout(cart))
});


export default connect(mapStateToProps, mapDispatchToProps)(CartModal);