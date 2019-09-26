import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const logo = require('/Lambda/week8/buildweek2/soup/src/Landing/serve_soup.png');
const logotext = require('/Lambda/week8/buildweek2/soup/src/Landing/shrinktext_soup2.png');

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: gold;`

const StyledHeader = styled.div`
    display: flex;
    width: 100vw;
    height: 20vh;
    align-content: center;
    padding: 1em;`

const InnerStyledHeader = styled.div`
    display: flex;
    width: 80%;
    padding: 0.5em;
    justify-content: center;
    background-color: lightslategrey;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 0 auto;`

const HomeDiv = styled.div`
    width: 45%;
    justify-content: center;
    margin: 1em;`

const NavDiv = styled.div`
    width: 45%;
    display: flex;
    margin: 1em;
    justify-content: flex-end;`

const StyledBody = styled.div`
    display: flex;
    width: 100vw;
    height: 80vh;
    justify-content: space-around;`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    margin: 0.3em;
    background-color: lightslategray;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;`

const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 25%;
    width: 100%;`

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 75%;`

const Button = styled.button`
    color: white;
    background-color: orange;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.3em;
    height: 45%;
    font-family: system-ui, sans-serif;
    border-radius: 0.3em;
    padding: 0.5em;
    text-decoration: none;
    border: 0;
    cursor: pointer;
    
    &:hover {
    background-color: green;
    color: gold;
    letter-spacing: 1px;
    transition: all 0.4s ease 0s;
    box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);}`;

const StyledH3 = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.0em;
    margin: 0.8em;
    color: orange;
    cursor: pointer;
    
    &:hover {
    color: gold;
    letter-spacing: 1px;
    transition: all 0.4s ease 0s;
    box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);}`

const ImgDiv = styled.div`
    display: flex;
    width: 36.875rem;
    height: 28.75rem;
    justify-content: center;
    align-content: center;`

function Landing() {
  

    return (
      <StyledContainer>
          <StyledHeader>
            <InnerStyledHeader>
                <HomeDiv>
                    <img src={logotext} alt="serve-soup-text"/>
                </HomeDiv>
                <NavDiv>
                    <StyledH3><a>About</a></StyledH3>
                    <StyledH3><a>Home</a></StyledH3>
                </NavDiv>
            </InnerStyledHeader>
          </StyledHeader>
          <StyledBody>
                <BodyContainer>
                    <LogoDiv>
                        <ImgDiv>
                            <img src={logo} alt="serve-soup"/>
                        </ImgDiv>
                    </LogoDiv>
                    {/* <TextDiv>
                        <StyledH3>Welcome to I'll Serve Soup</StyledH3>
                    </TextDiv> */}
                    <ButtonDiv>
                        <Link to={"/register"}><Button>Register</Button></Link>
                        <Link to={"/login"}><Button>Sign In</Button></Link>
                    </ButtonDiv>
              </BodyContainer>
          </StyledBody>
      </StyledContainer>
    );
  }
  
  export default Landing;