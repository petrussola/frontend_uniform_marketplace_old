import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import styled from "styled-components";

import uniformOne from "../media/uniform_1.jpg";

const StyledDiv = styled.div`
  padding: 0 1em;
  background-color: #fcfcfc;
  height: 100vh;
`;

const StyledJumbotron = styled(Jumbotron)`
  background-color: inherit;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100px;
  span {
    color: #15a545;
  }
  .parts-jumbotron {
    width: 50%;
  }
  .right-jumbotron {
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      border-radius: 0.3rem;
    }
  }
  h1 {
    font-size: 2.5rem;
    padding: 0.2rem 0;
  }
  p {
    padding: 0.2rem 0;
    font-size: 1.5rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: #15a545;
  border-color: #15a545;
  :disabled {
    background-color: #15a545;
    border-color: #15a545;
    opacity: 1;
  }
`;

const StyledFooter = styled.footer`
  bottom: 1rem;
  position: absolute;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

export default function MarketingPage() {
  return (
    <StyledDiv>
      <Navbar expand="lg">
        <Navbar.Brand>Share Uniforms</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          {process.env.REACT_APP_IS_SITE_LIVE === "false" ? null : (
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Sign In</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <StyledJumbotron>
        <div className="left-jumbotron parts-jumbotron">
          <h1>
            School uniforms are expensive, and kids outgrow them.
            <span> Very fast.</span>
          </h1>
          <p>
            Marketplace for a community of parents to share unused uniforms so
            others can get the size they need for free or at a reduced price.
          </p>
          <StyledButton size="lg" block disabled>
            Coming soon to your local school
          </StyledButton>
        </div>
        <div className="right-jumbotron parts-jumbotron">
          <img src={uniformOne} alt="school uniform" />
        </div>
      </StyledJumbotron>
      <StyledFooter>Made with love by peresola.com</StyledFooter>
    </StyledDiv>
  );
}
