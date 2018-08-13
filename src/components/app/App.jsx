import React, { Component } from 'react';

import './styles.scss';

import {
  PortfolioContainer,
  ModalContainer,
  IndexTableContainer,
  InfoBlockContainer,
  TypeSelectorContainer
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
        <div className="content info">
          <InfoBlockContainer />
          <TypeSelectorContainer />
        </div>
      </div>
    );
  }
}
