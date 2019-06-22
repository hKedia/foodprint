import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button } from 'semantic-ui-react';
import Styled from 'styled-components';
// import ProductComponent from './ProductComponent';

const ScanButton = Styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const h2 = Styled.div`
  display: block;
  justify-content: center ;
  text-alignment: center;
  align-items: top;
  background: url('/static/login/background.png') center 40% no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw !important;
  padding-top: 10px;
`;

const Container = Styled.div`
  display: block;
  justify-content: center ;
  align-items: top;
  background: url('/static/login/background.png') center 40% no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw !important;
  padding-top: 10px;
`;

const ProductBox = Styled.div`
  display: grid;
  #margin: 2px;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 98vw;
  border-radius: 5px;
  background-color: hsla(50, 85%, 85%, 0.6);
`;

// ProductComponent.propType = {

// };


class ProductComponent extends Component {
  render() {    if(false)

      return (
        <Container>
          <div>No Chain Selected ..</div>
        </Container>);
    else{
      const element = (<div>Text from Element</div>)    
      return (
        <Container>
          <h2>Product Name</h2>
          <ProductBox>
            <div className="comptext">
            <h3>SubProduct</h3>
            {this.props.displaytext} {element}    </div>
          </ProductBox>
        </Container>
      )  
    }
  }
}


export default class Consumer extends Component {
  render() {
    //bark = ProductComponent();
    return (
      <Layout>
        <ProductComponent /> 
        <ScanButton circular secondary size='huge' icon='qrcode'></ScanButton>
      </Layout>
    )
  }
}