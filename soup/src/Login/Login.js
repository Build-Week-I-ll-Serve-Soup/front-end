import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styledfont = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.0em;
    margin: 0.2em;`

const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    justify-content: center;
    align-content: center;`

const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: orange;
    border-radius: 1em;
    width: 50%;
    height: 70%;
    align-self: center;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;`

const StyledOuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 80%;
    height: 70%;
    justify-content: center;`

const StyledInnerDiv = styled.div`
    padding: 1em;
    margin: 0 auto;
    width: 60%;
    display: flex;
    flex-direction: column;`

const Button = styled.button`
    color: white;
    background-color: green;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.3em;
    font-family: system-ui, sans-serif;
    border-radius: 0.3em;
    padding: 0.5em;
    text-decoration: none;
    border: 0;
    cursor: pointer;`

const Login = (props) => {
  
    const [creds, setCreds] = useState({
      username: '', 
      password: ''
    });
  
    const login = (e) => {
      e.preventDefault();
       axiosWithAuth()
          .post('https://serve-soups.herokuapp.com/api/auth/login', creds)
          .then(res => {localStorage.setItem('token', res.token);
          props.history.push('/inventory')
      })}
  
      const handleChange = e => {
          setCreds({
              ...creds,
              [e.target.name]: e.target.value
          })
      }
  
  
    return (
      <>
      <StyledOuterDiv>
      <OuterDiv>
          <InnerDiv>
      <Styledfont>Please log in!</Styledfont>
        <form onSubmit={login}>
            <StyledInnerDiv>
          <input
          type="text"
          name="username"
          value={creds.username}
          placeholder="Username"
          onChange={handleChange}
          />
          </StyledInnerDiv>
          <StyledInnerDiv>
          <input
          type="password"
          name="password"
          value={creds.password}
          placeholder="Password"
          onChange={handleChange}
          />
          </StyledInnerDiv>
          <StyledInnerDiv>
          <Button>Login</Button>
          </StyledInnerDiv>
        </form>
        <p>Don't have an account? <Link to="/register">Sign up here!</Link></p>
        </InnerDiv>
        </OuterDiv>
        </StyledOuterDiv>
      </>
    );
  };
  
  export default Login;
  
