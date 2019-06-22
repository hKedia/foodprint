import React, { Component } from 'react';
import Styled from 'styled-components';
import { User, getConfig } from 'radiks';
import { Image, Icon } from 'semantic-ui-react';

const Container = Styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: url('/static/login/background.png') center no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Logo = Styled.div`

`;

const TypeText = Styled.div`
  background: #fff;
  grid-column: 1;
`;

const TypeContainer = Styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserType = Styled.div`
  background: #fff;
  padding: 1.2em;
  border: 1px solid #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

const LoginContainer = Styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginButton = Styled.button`

`;

const SecureText = Styled.div`
  color: #fff;
`;

class Home extends Component {
  state = {
    loading: false,
    role: null
  }

  async componentDidMount() {
    const { userSession } = getConfig();

    if (userSession.isUserSignedIn()) {
      //this.setState({ loading: true });
      const user = userSession.loadUserData();
    }
    else if (userSession.isSignInPending()) {
      this.setState({ loading: true });
      const user = await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
    }
  }

  login = () => {
    const scopes = [
      'store_write',
      'publish_data',
    ];
    const redirect = window.location.origin;
    const manifest = `${window.location.origin}/manifest.json`;
    const { userSession } = getConfig();
    userSession.redirectToSignIn(redirect, manifest, scopes);
  }

  render() {
    return (
      <Container>
        <Logo>
          <Image src='static/Logo.png' />
        </Logo>
        <TypeText>Select User Type</TypeText>
        <TypeContainer>
          <UserType>
            <Image src='/static/login/consumer.png' />
            <span>Consumer</span>
          </UserType>
          <UserType>
            <Image src='/static/login/supplier.png' />
            <span>Supplier</span>
          </UserType>
        </TypeContainer>
        <LoginContainer>
          <LoginButton>Login</LoginButton>
          <SecureText>
            <Icon name='lock' />
            <span>Securely Identify with Blockstack</span>
          </SecureText>
        </LoginContainer>
      </Container>
    )
  }
}

export default Home;