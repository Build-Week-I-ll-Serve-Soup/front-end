import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"

const StyledDiv = styled.div`
    width: 50%;
    padding: 25%;
    padding-top:5%;
    padding-bottom:35%;
    font-weight: bold;
    background-color: #BB4142;    
`
const StyledButton = styled.button`
    max-width: 150px;
    padding: 12px 20px;
    border-style: none;
    background-color: #52B402;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 17px;
    font-weight: 500;
    color: #fff;
`

const UserForm = (props) => {
  
  const [creds, setCreds] = useState({
    username: '',
    email: '', 
    password: '',
    kit_id: Date.now()
  });

  const register = (e) => {
    e.preventDefault();
     axios
        .post('https://serve-soups.herokuapp.com/api/auth/register', creds)
        .then(res => console.log(res))
        props.history.push('/login')
    }

    const handleChange = e => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }


  return (
    <>
    <StyledDiv>
    <h1>Registration</h1>
      <form onSubmit={register}>
        <input
        type="text"
        name="username"
        value={creds.username}
        placeholder="Username"
        onChange={handleChange}
        />
      
      <input
        type="text"
        name="email"
        value={creds.email}
        placeholder="Email"
        onChange={handleChange}
        />

        <input
        type="password"
        name="password"
        value={creds.password}
        placeholder="Password"
        onChange={handleChange}
        />
      
        <StyledButton>Sign Up!</StyledButton>
      </form>
      </StyledDiv>
    </>
  );
};

export default UserForm;

