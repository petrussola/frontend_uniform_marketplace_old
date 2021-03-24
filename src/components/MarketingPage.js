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
  position: relative;
  box-sizing: border-box;
  @media (max-width: 800px) {
    height: auto;
  }
`;

const StyledJumbotron = styled(Jumbotron)`
  background-color: inherit;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  height: auto;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
  span {
    color: #15a545;
  }
  .parts-jumbotron {
    width: 50%;
    @media (max-width: 800px) {
      width: 100%;
    }
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
      @media (max-width: 800px) {
        height: 75%;
      }
    }
  }
  h1 {
    font-size: 2.5rem;
    padding: 0.2rem 0;
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
  p {
    padding: 0.2rem 0;
    font-size: 1.5rem;
    @media (max-width: 800px) {
      font-size: 1.25rem;
    }
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
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  padding-top: 1rem;
  margin: 0 auto;
  text-align: center;
  background-color: #e7e7e7;
  color: #959595;
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

export default function MarketingPage() {
  return (
    <StyledDiv>
      <Navbar expand="lg">
        <Navbar.Brand>Share Uniforms</Navbar.Brand>

        {process.env.REACT_APP_IS_SITE_LIVE === "false" ? null : (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Sign In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
      <StyledJumbotron>
        <div className="left-jumbotron parts-jumbotron">
          <h1>
            School uniforms are expensive, and kids outgrow them.
            <span> Very fast.</span>
          </h1>
          <p>
            Marketplace for communities of parents to donate or sell school
            uniforms so others can reuse them.
          </p>
          <StyledButton size="lg" block disabled>
            Coming soon to your local school
          </StyledButton>
        </div>
        <div className="right-jumbotron parts-jumbotron">
          <img src={uniformOne} alt="school uniform" />
        </div>
      </StyledJumbotron>
      <StyledFooter>
        <p>
          © 2021 ShareUniforms.com. All rights reserved. Made with 💙 by{" "}
          <a href="https://www.peresola.com">peresola.com</a>
        </p>
      </StyledFooter>
    </StyledDiv>
  );
}
