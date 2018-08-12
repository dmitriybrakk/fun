import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appLoaded } from '../actions/app';

import { App } from '../components/app';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    appLoaded
  }, dispatch)
});

export const AppContainer = connect(null, mapDispatchToProps)(App);
