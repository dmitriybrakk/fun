import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openForm } from '../actions/form';

import { Portfolio } from '../components/portfolio';

const mapStateToProps = state => ({
  assets: state.assets
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    openForm
  }, dispatch)
});

export const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(Portfolio);
