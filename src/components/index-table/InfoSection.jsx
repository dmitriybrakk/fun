import React from 'react';

export const InfoSection = ({
  portfolioInvestment,
  indexTotalValue,
  currentPortfolioValue,
  indexProfitability,
  portfolioProfitability
}) => (
  <div>
    <div>Portfolio investment: {portfolioInvestment}</div>
    <div>Index total value: {indexTotalValue}</div>
    <div>Current portfolio value: {currentPortfolioValue}</div>
    <div>Index profitability: {indexProfitability}%</div>
    <div>Portfolio profitability: {portfolioProfitability}%</div>
  </div>
);
