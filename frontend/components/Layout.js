import React, { Component } from 'react';

import Header from './Header';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    )
  }
}