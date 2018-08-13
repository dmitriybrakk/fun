import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';

import { switchIndexType } from '../actions/indexData';

import { getAssets } from '../utils/selectors';
import { floatSum, floatMult } from '../utils/asset';

import { IndexTable } from '../components/index-table';

const mapStateToProps = (state) => {
  const assets = getAssets(state);
  const { currentType } = state.indexData;
  const indexValues = _.get(state, ['indexData', 'data', currentType, 'indexValues']);

  const indexTableData = indexValues ? assets.reduce((data, asset) => {
    const { date } = asset;
    const close = _.get(indexValues, [date, '4. close']);
    const assetsTotal = data[date] ? floatSum(data[date].assetsTotal, asset.total) : asset.total;

    let indexQty = 0;
    let totalIndexValue = 0;

    if (close) {
      indexQty = parseInt((assetsTotal / close), 10);
      totalIndexValue = floatMult(indexQty, close).toFixed(4);
    }

    return {
      ...data,
      [date]: {
        date,
        assetsTotal: assetsTotal.toFixed(4),
        close,
        indexQty,
        totalIndexValue
      }
    };
  }, {}) : {};

  return {
    isLoading: state.indexData.isLoading,
    indexTableData,
    indexType: currentType
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    switchIndexType
  }, dispatch)
});

export const IndexTableContainer = connect(mapStateToProps, mapDispatchToProps)(IndexTable);
