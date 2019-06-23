import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Modal, Header, Item, Label } from 'semantic-ui-react';
// import QrReader from 'react-qr-reader';
import Styled from 'styled-components';
import Router from 'next/router';

const ScanButton = Styled(Button)`	
  position: absolute;	
  right: 10px;	
  bottom: 10px;	
`;

const StyledItem = Styled(Item)`
  &&& {
    display: flex;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.07);
    border-radius: 7px;
    margin: 7px;
  }
`;

const StyledItemContent = Styled(Item.Content)`
    &&& {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;

export default class Consumer extends Component {
  state = {
    qrdata: null
  }

  componentDidUpdate() {
    Router.push({
      pathname: '/product',
      query: { name: this.state.qrdata }
    })
  }

  onUnmount() {
    console.log('Modal Closed');
  }

  handleError = err => {
    console.error(err);
  }

  handleScan = data => {
    if (data) {
      this.setState({ qrdata: data });
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
              {/* <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%' }}
              /> */}
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Header>Scan History</Header>
        <StyledItem>
          <Item.Image size='tiny' src='/static/home/tomatoes.png' />
          <StyledItemContent>
            <Item.Header as='a'>Tomatoes</Item.Header>
            <Item.Meta>Kaufland</Item.Meta>
            <Item.Description>
              <Label circular color='green'>Vegan</Label>
              <Label circular color='green'>Bio</Label>
              <Label>€ 4,5</Label>
            </Item.Description>
          </StyledItemContent>
        </StyledItem>
        <StyledItem>
          <Item.Image size='tiny' src='/static/home/sandwich.png' />
          <StyledItemContent>
            <Item.Header as='a'>Veggie Sandwich</Item.Header>
            <Item.Meta>Kaufland</Item.Meta>
            <Item.Description>
              <Label circular color='green'>Vegetarian</Label>
              <Label>€ 2,5</Label>
            </Item.Description>
          </StyledItemContent>
        </StyledItem>
      </Layout>
    )
  }
}