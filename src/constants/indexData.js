export const ENTRIES = [
  { name: 'date', displayName: 'Date' },
  { name: 'assetsTotal', displayName: 'Total assets sum' },
  { name: 'close', displayName: 'Close price' },
  { name: 'indexQty', displayName: 'Index quantity' },
  { name: 'totalIndexValue', displayName: 'Total index value' }
];

export const INDEX_TYPES = {
  QQQ: 'QQQ',
  SPY: 'SPY'
};

export const SELECTOR_TYPES = [
  { value: INDEX_TYPES.QQQ, displayValue: 'NASDAQ' },
  { value: INDEX_TYPES.SPY, displayValue: 'S&P500' }
];

export const INFO_SECTION_VALUES = [
  { property: 'portfolioInvestment', displayName: 'Portfolio investment' },
  { property: 'indexTotalValue', displayName: 'Index total value' },
  { property: 'currentPortfolioValue', displayName: 'Current portfolio value' },
  { property: 'indexProfitability', displayName: 'Index profitability', unit: '%' },
  { property: 'portfolioProfitability', displayName: 'Portfolio profitability', unit: '%' },
];
