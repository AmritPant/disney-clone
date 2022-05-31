import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <LogoBox>
          <LogoCompanies
            src="/images/cta-logo-one.svg"
            alt="Hulu , Disney Plus , ESPN logo"
          />
        </LogoBox>
        <CtaBox>
          <Cta>get it all there</Cta>
        </CtaBox>
        <TextBox>
          <Text>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Text>
        </TextBox>
        <MoviesLogoBox>
          <LogoMovies src="/images/cta-logo-two.png" alt="Marvel Logo + " />
        </MoviesLogoBox>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  padding: 0 4rem;
  overflow: hidden !important;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Content = styled.div`
  font-size: 1.6rem;
  width: 100%;
  max-width: 600px;
  margin-bottom: 8rem;
`;

const LogoBox = styled.div`
  margin-bottom: 1.2rem;
`;
const LogoCompanies = styled.img``;

const CtaBox = styled.div`
  max-width: 650px;
  margin-bottom: 1.5rem;
`;

const Cta = styled.a`
  color: #f9f9f9;
  font-weight: bold;
  display: inline-block;
  width: 100%;
  background-color: skyblue;
  text-transform: uppercase;
  padding: 1.8rem 0;
  text-align: center;
  background-color: #0063e5;
`;

const TextBox = styled.div`
  width: 100%;
  max-width: 650px;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const MoviesLogoBox = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const LogoMovies = styled.img`
  width: 100%;
  max-width: 100%;
`;

export default Login;
