import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editAsset, removeAsset } from '../actions/assets';
import { openModal } from '../actions/modal';

import { AssetItem } from '../components/assets';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    openModal,
    editAsset,
    removeAsset
  }, dispatch)
});

export const AssetItemContainer = connect(null, mapDispatchToProps)(AssetItem);
