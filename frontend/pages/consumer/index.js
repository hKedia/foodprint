import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Modal, Header } from 'semantic-ui-react';
import QrReader from 'react-qr-reader';

export default class Consumer extends Component {
  state = {
    qrcode: null
  }

  onUnmount() {
    console.log('Modal Closed');
  }

  handleError = err => {
    console.error(err);
  }

  handleScan = data => {
    console.log(data);
    if (data) {
      this.setState({
        qrcode: data
      })
    }
  }

  render() {
    return (
      <Layout title='Food Print'>
        <Modal
          trigger={<ScanButton circular secondary size='huge' icon='qrcode'></ScanButton>}
          onUnmount={this.onUnmount}
          size='fullscreen'
          basic
        >
          <Modal.Content>
            <Modal.Description>
              <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%' }}
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Header>Scan History</Header>
      </Layout>
    )
  }
}