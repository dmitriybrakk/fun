import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAsset } from '../actions/assets';
import { openForm } from '../actions/form';

import { AssetItem } from '../components/assets';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    removeAsset,
    openForm
  }, dispatch)
});

export const AssetItemContainer = connect(null, mapDispatchToProps)(AssetItem);
