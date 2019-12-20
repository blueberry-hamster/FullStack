import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { getProducts } from '../../actions/product_actions';
import { getCategories } from '../../actions/category_actions';
import { selectProducts } from '../../reducers/selectors/product_selector';
import { getCart } from "../../actions/cart_actions";
import { createCartItem, updateCartItem } from "../../actions/cart_item_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownprops) => {
  const category = ownprops.match.params.category ? ownprops.match.params.category : undefined;
  let products = selectProducts(state, category);

  return {
    categories: Object.values(state.entities.categories),
    category,
    products,
    cart: state.entities.cart,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  
  createCartItem: (cart_item) => dispatch(createCartItem(cart_item)),
  updateCartItem: (cart_item) => dispatch(updateCartItem(cart_item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);