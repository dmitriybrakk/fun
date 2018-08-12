import { connect } from 'react-redux';

import { getAssets } from '../utils/selectors';

import { IndexTable } from '../components/index-table';

const mapStateToProps = (state) => {
  const indexTableData = getAssets(state).reduce((data, asset) => {
    const { date, total } = asset;

    if (!data[date]) {
      const assetsTotal = total;
      const close = state.stock.data[date]['4. close'];
      const indexQty = parseInt((assetsTotal / close), 10);

      return {
        ...data,
        [date]: {
          date,
          assetsTotal,
          close,
          indexQty
        }
      };
    }

    const assetsTotal = parseFloat(data[date].assetsTotal) + parseFloat(asset.total);
    const indexQty = parseInt((assetsTotal / data[date].close), 10);

    return {
      ...data,
      [date]: {
        ...data[date],
        assetsTotal,
        indexQty
      }
    };
  }, {});

  return {
    isLoading: state.stock.isLoading,
    indexTableData
  };
};

export const IndexTableContainer = connect(mapStateToProps)(IndexTable);
