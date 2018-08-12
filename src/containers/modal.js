import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { formValueSelector } from 'redux-form';

import { closeModal } from '../actions/modal';

import { Modal } from '../components/form';
import { addAsset, updateAsset } from '../actions/assets';

const selector = formValueSelector('asset');

const mapStateToProps = (state) => {
  const id = _.get(state, ['modal', 'assetId']);
  const initialValues = _.get(state, ['assets', id], {});

  return {
    modal: state.modal,
    initialValues,
    quantity: selector(state, 'quantity'),
    price: selector(state, 'price')
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    closeModal,
    addAsset,
    updateAsset
  }, dispatch)
});

export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
