import { connect } from 'react-redux';
import _ from 'lodash';

import { getAssets } from '../utils/selectors';
import { floatSum, floatMult } from '../utils/asset';

import { IndexTable } from '../components/index-table';

const mapStateToProps = (state) => {
  const assets = getAssets(state);
  const { currentType } = state.indexData;
  const indexValues = _.get(state, ['indexData', 'data', currentType, 'indexValues']);

  const indexTableData = indexValues ? assets.reduce((data, asset) => {
    const { date } = asset;
    const close = indexValues[date]['4. close'];
    const assetsTotal = data[date] ? floatSum(data[date].assetsTotal, asset.total) : asset.total;

    const indexQty = parseInt((assetsTotal / close), 10);
    const totalIndexValue = floatMult(indexQty, close).toFixed(4);

    return {
      ...data,
      [date]: {
        date,
        assetsTotal,
        close,
        indexQty,
        totalIndexValue
      }
    };
  }, {}) : {};

  return {
    isLoading: state.indexData.isLoading,
    indexTableData
  };
};

export const IndexTableContainer = connect(mapStateToProps)(IndexTable);
