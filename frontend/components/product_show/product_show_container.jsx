import { connect } from 'react-redux';
import ProductShow from './product_show';
import { getProduct } from '../../actions/product_actions';
// import getImages

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.match.params.name.replace(/-/g, ' ');
  return {
  product: state.entities.product[name]
}};

const mapDispatchToProps = dispatch => ({
  getProduct: name => dispatch(getProduct(name)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);