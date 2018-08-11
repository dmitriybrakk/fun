import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addAsset, removeAsset, updateAsset } from '../actions/assets';
import { openForm, closeForm } from '../actions/form';

import { Portfolio } from '../components/portfolio';

const mapStateToProps = state => ({
  assets: state.assets,
  assetToEdit: state.assetForm.assetToEdit
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addAsset,
    removeAsset,
    updateAsset,
    openForm,
    closeForm
  }, dispatch)
});

export const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(Portfolio);
