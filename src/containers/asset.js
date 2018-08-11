import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editAsset, removeAsset } from '../actions/assets';

import { AssetItem } from '../components/assets';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    editAsset,
    removeAsset
  }, dispatch)
});

export const AssetItemContainer = connect(null, mapDispatchToProps)(AssetItem);
