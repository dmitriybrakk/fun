import React, { Component } from 'react';

import './styles.scss';

import {
  PortfolioContainer,
  ModalContainer,
  StockTableContainer
} from '../../containers';

export class App extends Component {
  componentDidMount() {
    this.props.actions.appLoaded();
  }

  render() {
    return (
      <div className="app">
        <PortfolioContainer />
        <ModalContainer />
        <StockTableContainer />
      </div>
    );
  }
}
