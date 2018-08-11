import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { addAsset, updateAsset } from '../actions/assets';
import { closeForm } from '../actions/form';

import { AssetForm } from '../components/assets';

const mapStateToProps = state => ({
  assets: state.assets,
  isFormOpen: _.get(state, ['form', 'asset', 'isFormOpen']),
  assetToEdit: _.get(state, ['form', 'asset', 'assetToEdit'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addAsset,
    updateAsset,
    closeForm
  }, dispatch)
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { assets, assetToEdit } = stateProps;

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    initialValues: assetToEdit && assets[assetToEdit]
  };
};

export const AssetFormContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AssetForm);
