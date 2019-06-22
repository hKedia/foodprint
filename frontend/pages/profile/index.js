import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Styled from 'styled-components';
import { Button, Image, Header, Divider, Container, Item, Label, Grid } from 'semantic-ui-react';


const StyledImage = Styled(Image)`
  padding-top: 4vh;
`;

const StyledIngredientsContainer = Styled.div`
  &&& {
    background: rgba(20, 20, 20, 0.1);
    height: 55vh
  }
`;

const StyledItem = Styled(Item)`
  &&& {
    display: flex;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.07);
    border-radius: 7px;
    margin: 7px;
    width: 95%!important;
  }
`;

const StyledItemContent = Styled(Item.Content)`
    &&& {
      display: grid;
      justify-content: space-between;
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

const LeftGridColumn = Styled(Grid.Column)`
  content-align: left center;
`;

const RightGridColumn = Styled(Grid.Column)`
  content-align: right;
`;

export default class Product extends Component {
  render() {
    return (
      <Layout title='Profile'>
        <StyledProductContainer>
          <StyledImage src='/static/profile/hans.png' size='small' centered />
          <Header as='h2' icon textAlign='center'>
            <Header.Content>Hans Berkhoff
          <Header.Subheader>Farmer</Header.Subheader>
            </Header.Content>
            <Label circular color='green'>✓ Certified Bio-Farmer</Label>
          </Header>
        </StyledProductContainer>
        <Divider fitted />
        <StyledIngredientsContainer>
          <StyledIngredientHeader as='h2' disabled>Grows and Harvests</StyledIngredientHeader>
          <StyledItem>
            <Item.Image size='tiny' src='/static/ingredients/tomatoes.png' />
            <StyledItemContent>
              <Grid columns={2} relaxed='very'>
                <LeftGridColumn> Tomatoes </LeftGridColumn>
                <RightGridColumn>
                  <Label circular color='green'>Vegan</Label>
                </RightGridColumn>
              </Grid>
            </StyledItemContent>
          </StyledItem>

          <StyledItem>
            <Item.Image size='tiny' src='/static/profile/potatoes.png' />
            <StyledItemContent>
              <Grid columns={2} relaxed='very'>
                <LeftGridColumn> Potatoes </LeftGridColumn>
                <RightGridColumn>
                  <Label circular color='green'>Vegan</Label>
                </RightGridColumn>
              </Grid>
            </StyledItemContent>
          </StyledItem>
        </StyledIngredientsContainer>
      </Layout>
    );
  }
}