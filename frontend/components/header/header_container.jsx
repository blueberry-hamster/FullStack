import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { openCartModal } from "../../actions/cart_actions";
import Header from './header';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  logoutUser: user => dispatch(logoutUser(user)),
  openCartModal: modal => dispatch(openCartModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);