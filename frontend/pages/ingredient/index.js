import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Styled from 'styled-components';
import { Button, Image, Header, Grid, Container, Segment, Icon } from 'semantic-ui-react';

const StyledImage = Styled(Image)`
  padding-top: 4vh;
`;

const StyledProductContainer = Styled(Container)`
  #height: 44vh;
`;

const StyledLifeContainer = Styled.div`
  border-top: 1px;
  border-color: rgba(20, 20, 20, 0.8);
  background: rgba(20, 20, 20, 0.1);
  display: grid;
  align-content: center;
  text-align: center;
  height: 100%;
`;

const SmallRail = Styled.div`
&&& {
  display: flex;
}
`;

export default class Ingredient extends Component {
  render() {
    return (
      <Layout title='Life Chain'>
        <StyledProductContainer>
          <StyledImage src='/static/timeline/tomatoes.png' size='small' centered />
          <Header as='h2' icon textAlign='center'> Tomatoes </Header>
        </StyledProductContainer>
        <StyledLifeContainer>

          <Grid centered columns={3} verticalAlign='middle' textAlign='justified'>
            <Grid.Row>
              <Grid.Column width={6} textAlign='center'>
                <Segment basic textAlign='center'>
                  <Image src='/static/timeline/001-box.png' size='tiny' />
                </Segment>
              </Grid.Column>
              <Grid.Column width={2}>
                <Icon name='circle outline'></Icon>
              </Grid.Column>
              <Grid.Column width={6} textAlign='center'>
                <Segment basic textAlign='center'>Transportation <br /> 23/06/2019</Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid centered columns={3} verticalAlign='middle' textAlign='justified'>
            <Grid.Row>
              <Grid.Column width={6} textAlign='center'>
                <Segment basic textAlign='center'>Shipping &#38; Packaging <br /> 20/06/2019</Segment>
              </Grid.Column>
              <Grid.Column width={2}>
                <Icon name='circle outline'></Icon>
              </Grid.Column>
              <Grid.Column width={6} textAlign='center'>
                <Segment basic textAlign='center'>
                  <Image src='/static/timeline/002-shipped.png' size='tiny' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid centered columns={3} verticalAlign='middle' textAlign='justified'>
            <Grid.Row>
              <Grid.Column width={6} textAlign='center'>
                <Segment basic textAlign='center'>
                  <Image src='/static/timeline/004-warehouse.png' size='tiny' />
                </Segment>
              </Grid.Column>
              <Grid.Column width={2}>
                <Icon name='circle outline'></Icon>
              </Grid.Column>
              <Grid.Column width={6} textAlign='center'>
                <Segment textAlign='center' basic>Local Storage <br /> 17/06/2019</Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <p>Harvested on <br></br>17/06/2019 <br></br>by</p>
          <Header size='small'>Hans Berkhoff</Header>
          <Button>View Profile</Button>
        </StyledLifeContainer>
      </Layout>
    );
  }
}