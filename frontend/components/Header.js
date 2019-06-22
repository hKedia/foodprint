import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

export default class Header extends Component {
  render() {
    return (
      <Menu attached='top' color='green'>
        <Button icon='sidebar'></Button>
        <Menu.Item>{this.props.title}</Menu.Item>
      </Menu>
    );
  }
}