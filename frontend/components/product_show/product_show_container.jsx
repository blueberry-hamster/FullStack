import { connect } from 'react-redux';
import ProductShow from './product_show';
import { getProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  getProduct: () => dispatch(getProduct())
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);