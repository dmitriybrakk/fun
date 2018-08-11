import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeForm } from '../actions/form';

import { AssetForm } from '../components/assets';

const mapStateToProps = state => ({
  assets: state.assets,
  isFormOpen: state.assetForm.isFormOpen,
  assetToEdit: state.assetForm.assetToEdit
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    closeForm
  }, dispatch)
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  initialValues: stateProps.assets[stateProps.assetToEdit]
});

export const AssetFormContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AssetForm);
