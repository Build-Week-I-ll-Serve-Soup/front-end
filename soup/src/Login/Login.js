import React from 'react';
import {Formik, Form, Field,} from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

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

const Input = styled.input`
    font-size: 1.5em;
    border: 1px solid #999;`

const initialValueForm = {
    email: '',
    password: '',
}

const validationSchema = yup.object().shape({
    email: yup.string()
        .required('An email is required'),
    password: yup.string()
        .min(6, 'password must be 6 characters or longer')
        .required('A password is required'),
})

function LoginForm(props){
    const {onSubmit} = props;

    return(<Formik
        initialValues = {initialValueForm}
        onSubmit = {onSubmit}
        validationSchema = {validationSchema}
        render={props => {
            return (
                <Form>
                    <OuterDiv>
                        <InnerDiv>
                            <Styledfont>Sign In</Styledfont>
                            <StyledOuterDiv>
                                <StyledInnerDiv>
                                    <Input type='email' name='password' placeholder='Email'/>
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Input type='password' name='password' placeholder='Password'/>
                                </StyledInnerDiv>

                                <StyledInnerDiv>
                                    <Button type='submit'>Login</Button>
                                </StyledInnerDiv>
                            </StyledOuterDiv>
                            <p>Don't have an account? <a href='#'>Sign up here!</a></p>
                        </InnerDiv>
                    </OuterDiv>
                </Form>
            );
        }}
    
    />);

}

export default LoginForm;