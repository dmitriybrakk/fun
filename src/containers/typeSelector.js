import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { switchIndexType } from '../actions/indexData';

import { SelectBox } from '../components/type-selector';

const mapStateToProps = state => ({
  indexType: state.indexData.currentType
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    switchIndexType
  }, dispatch)
});

export const TypeSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(SelectBox);
