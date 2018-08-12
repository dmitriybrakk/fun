import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editAsset } from '../actions/assets';
import { openModal } from '../actions/modal';

import { Portfolio } from '../components/portfolio';

const mapStateToProps = state => ({
  assets: state.assets
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    editAsset,
    openModal
  }, dispatch)
});

export const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(Portfolio);
