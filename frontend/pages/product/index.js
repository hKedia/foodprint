import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Styled from 'styled-components';
import { Button, Image, Header, Divider, Container, Item, Label } from 'semantic-ui-react';


const StyledImage = Styled(Image)`
  padding-top: 4vh;
`;

const StyledIngredientsContainer = Styled(Container)`
  background: rgba(20, 20, 20, 0.1);
  margin-left: 0em !important;
  margin-right: 0em !important;
  height: 55vh!important;
`;

const StyledIngredientContainer = Styled(Container)`
  background: rgba(255, 255, 255, 0.9);
  margin: 5%;
  height: 25%;
  border-radius: 3.5%;
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

const StyledProductContainer = Styled(Container)`
  height: 44vh;
`;

const StyledIngredientHeader = Styled(Header)`
  margin-left: 5%;
  padding-top: 5%;
`;

export default class Product extends Component {
  render() {
    return (
      <Layout title='Product Details'>
        <StyledProductContainer>
          <StyledImage src='/static/ingredients/sandwich.png' size='small' centered />
          <Header as='h2' icon textAlign='center'>
            <Header.Content>Veggie Sandwich
          <Header.Subheader>Coop</Header.Subheader>
            </Header.Content>
            <Label circular color='black'>Vegetarian</Label>
            <Label circular color='green'>Bio</Label>
            <Header.Content>2.50 € | 250 gr</Header.Content>
          </Header>
        </StyledProductContainer>
        <Divider fitted />
        <StyledIngredientsContainer>
          <StyledIngredientHeader as='h2' disabled>Ingredients</StyledIngredientHeader>
          <StyledItem>
            <Item.Image size='tiny' src='/static/ingredients/oat-bread.png' />
            <StyledItemContent>
              <Item.Header as='a'>Oat-Bread</Item.Header>
              <Item.Meta>Kaufland</Item.Meta>
              <Item.Description>
                <Label circular color='green'>Vegan</Label>
                <Label circular color='green'>Bio</Label>
                <Label>150 gr</Label>
              </Item.Description>
            </StyledItemContent>
          </StyledItem>
          <StyledItem>
            <Item.Image size='tiny' src='/static/ingredients/tomatoes.png' />
            <StyledItemContent>
              <Item.Header as='a'>Tomatoes</Item.Header>
              <Item.Meta>Kaufland</Item.Meta>
              <Item.Description>
                <Label circular color='green'>Vegan</Label>
                <Label circular color='green'>Bio</Label>
                <Label>20 gr</Label>
              </Item.Description>
            </StyledItemContent>
          </StyledItem>
          <StyledItem>
            <Item.Image size='tiny' src='/static/ingredients/mozzarella.png' />
            <StyledItemContent>
              <Item.Header as='a'>Mozzarella</Item.Header>
              <Item.Meta>Kaufland</Item.Meta>
              <Item.Description>
                <Label circular color='green'>Bio</Label>
                <Label>80 gr</Label>
              </Item.Description>
            </StyledItemContent>
          </StyledItem>
        </StyledIngredientsContainer>
        </Layout>
        );
  }
}