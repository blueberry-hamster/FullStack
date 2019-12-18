import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import CartModalContainer from '../cart/cart_modal_container';
import { connect } from 'react-redux';

class Modal extends React.Component {

  render() {
    if (!this.props.modal) {
      return null;

    } else if (this.props.modal === 'cart') {
      return <CartModalContainer />
      
    } else {
      return null;
    }
  }

}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);