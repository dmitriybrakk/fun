import React from 'react';

import './styles.scss';

import { PortfolioContainer } from '../../containers';

export const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to your porfolio</h1>
    </header>
    <p className="App-intro">
      Hi
    </p>
    <PortfolioContainer />
  </div>
);
