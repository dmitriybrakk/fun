import React, { Component } from 'react';

import './styles.scss';

import {
  PortfolioContainer,
  ModalContainer,
  IndexTableContainer
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
        <IndexTableContainer />
      </div>
    );
  }
}
