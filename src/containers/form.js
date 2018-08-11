import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { addAsset, updateAsset } from '../actions/assets';
import { closeForm, setInitialValues } from '../actions/form';

import { AssetForm } from '../components/assets';

const mapStateToProps = (state) => {
  const assetId = _.get(state, ['form', 'asset', 'id']);
  const values = _.get(state, ['form', 'asset', 'values']);
  const initialValues = _.get(state, ['assets', assetId], {});

  return {
    isFormOpen: _.get(state, ['form', 'asset', 'isFormOpen']),
    isInitialized: _.get(state, ['form', 'asset', 'isInitialized']),
    assetId,
    initialValues,
    values
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addAsset,
    updateAsset,
    closeForm,
    setInitialValues
  }, dispatch)
});

export const AssetFormContainer = connect(mapStateToProps, mapDispatchToProps)(AssetForm);
