import { connect } from 'react-redux';

import { StockTable } from '../components/stock';

const mapStateToProps = (state) => {
  const stockTableData = Object.values(state.assets).reduce((data, asset) => {
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
    stockTableData
  };
};

export const StockTableContainer = connect(mapStateToProps)(StockTable);
