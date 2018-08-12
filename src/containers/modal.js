import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { closeModal } from '../actions/modal';

import { Modal } from '../components/form';
import { addAsset, updateAsset } from '../actions/assets';

const mapStateToProps = (state) => {
  const id = _.get(state, ['modal', 'assetId']);
  const values = _.get(state, ['assets', id], {});

  return {
    modal: state.modal,
    values
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    closeModal,
    addAsset,
    updateAsset,
  }, dispatch)
});

export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
