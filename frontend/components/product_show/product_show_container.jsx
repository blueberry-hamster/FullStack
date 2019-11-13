import { connect } from 'react-redux';
import ProductShow from './product_show';
import { getProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.match.params.name.replace(/-/g, ' ');
  return {
  product: state.entities.products[name]
}};

const mapDispatchToProps = dispatch => ({
  getProduct: name => dispatch(getProduct(name)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);