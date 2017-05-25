import React from 'react';
import { IndexLink, Link } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Header from './Header';

export default class Layout extends React.Component {
  render() {
    return (
      <div id="layout">
        <Header />
        <section id="content">
          <CSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {React.cloneElement(this.props.children, { key: this.props.location.pathname})}
          </CSSTransitionGroup>
        </section>
      </div>
    );
  }
}