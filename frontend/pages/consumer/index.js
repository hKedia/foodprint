import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button } from 'semantic-ui-react';
import Styled from 'styled-components';

const ScanButton = Styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export default class Consumer extends Component {
  render() {
    return (
      <Layout>
        <ScanButton circular secondary size='huge' icon='qrcode'></ScanButton>
      </Layout>
    )
  }
}