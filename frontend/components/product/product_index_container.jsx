import { connect } from 'react-redux';
import ProductIndex from './product_index';
// import { createNewUser } from '../../actions/session_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  // createNewUser: user => dispatch(createNewUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);