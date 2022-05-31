import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebaseSetup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Header() {
  // prettier-ignore
  const navIcons = ["home", "search", "watchlist", "originals", "movies", "series"];

  const loginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CustomHeader>
      <LogoBox>
        <DisneyLogo src="/images/logo.svg" alt="Disney Plus Logo" G />
      </LogoBox>
      <NavMenu>
        {navIcons.map((icon) => {
          return (
            <Options key={icon}>
              <a href={icon === "home" ? "/home" : ""}>
                <img src={`/images/${icon}-icon.svg`} alt={`${icon} Icon`} />
                <span>{icon}</span>
              </a>
            </Options>
          );
        })}
      </NavMenu>
      <LoginButton onClick={loginHandler}>Login</LoginButton>
    </CustomHeader>
  );
}

const CustomHeader = styled.header`
  background-color: #040714;
  padding: 1.25rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  width: 80px;
`;
const DisneyLogo = styled.img``;
const LoginButton = styled.button`
  background-color: black;
  color: #f9f9f9;
  font-size: 1.8rem;
  border: 1px solid #f9f9f9;
  border-radius: 7px;
  padding: 1rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
`;

const NavMenu = styled.nav`
  margin-right: auto;
  margin-left: 2.5rem;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 800px) {
    display: none;
  }

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Options = styled.li`
  a {
    display: inline-flex;
    align-items: center;
  }

  img {
    height: 20px;
    margin-right: 0.5rem;
  }

  span {
    font-size: 1.4rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      height: 2px;
      width: 0;
      background-color: #f9f9f9;
      transition: width 0.5s;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;

export default Header;
