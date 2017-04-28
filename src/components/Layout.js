import React from 'react';
import { IndexLink, Link } from 'react-router';

import Header from './Header';

export default class Layout extends React.Component {
  render() {
    return (
      <div id="layout">
        <Header />
        <section id="content">
          {this.props.children}
        </section>
      </div>
    );
  }
}