import { connect } from 'react-redux';
import _ from 'lodash';

import { getAssets } from '../utils/selectors';
import { floatSum, floatMult, floatDivison } from '../utils/asset';

import { InfoBlock } from '../components/index-table';

const mapStateToProps = (state) => {
  const assets = getAssets(state);
  const { currentType } = state.indexData;
  const indexValues = _.get(state, ['indexData', 'data', currentType, 'indexValues']);
  const lastUpdate = _.get(state, ['indexData', 'data', currentType, 'lastUpdate']);

  let portfolioInvestment = 0;
  let indexLotsSum = 0;
  let currentPortfolioValue = 0;

  assets.forEach((asset) => {
    portfolioInvestment += floatSum(portfolioInvestment, asset.total + asset.comission);

    const close = _.get(indexValues, [asset.date, '4. close']);

    if (close) {
      indexLotsSum += parseInt((asset.total / close), 10);
    }

    currentPortfolioValue += parseFloat(asset.currentPrice);
  });

  const indexTotalValue = (indexValues && lastUpdate && floatMult(indexLotsSum, indexValues[lastUpdate]['4. close'])) || 0;
  const indexProfitability = (indexTotalValue && floatDivison(portfolioInvestment, indexTotalValue).toFixed(2)) || 0;

  return {
    portfolioInvestment: portfolioInvestment.toFixed(4),
    indexTotalValue: indexTotalValue.toFixed(4),
    currentPortfolioValue: currentPortfolioValue.toFixed(4),
    indexProfitability,
    portfolioProfitability: floatDivison(portfolioInvestment, currentPortfolioValue).toFixed(2)
  };
};

export const InfoBlockContainer = connect(mapStateToProps)(InfoBlock);
