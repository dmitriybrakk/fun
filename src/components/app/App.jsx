import React from 'react';

import './styles.scss';

import {
  PortfolioContainer,
  ModalContainer
} from '../../containers';

export const App = () => (
  <div className="app">
    <PortfolioContainer />
    <ModalContainer />
  </div>
);
