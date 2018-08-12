import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openModal } from '../actions/modal';

import { getAssets } from '../utils/selectors';

import { Portfolio } from '../components/portfolio';

const mapStateToProps = state => ({
  assets: getAssets(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    openModal
  }, dispatch)
});

export const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(Portfolio);
