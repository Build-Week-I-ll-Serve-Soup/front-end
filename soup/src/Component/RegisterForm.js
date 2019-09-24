import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components"

const StyledDiv = styled.div`
    width: 50%;
    margin-left: 100px;
    padding: 32px;
    padding-right: 50px;
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



const UserForm = ({ errors, touched, values, status }) => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    status && setuser(user => [...user, status]);
  }, [status]);

  return (
    
    <StyledDiv className="registration-form"> 
          <h1>Registration</h1>
      <Form>
        <Field type="text" name="name" placeholder="Username" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <Field type="text" name="email" placeholder="email" />
        {touched.email && errors.email && <p className="error">{errors.email}</p>}

        <Field type="password" name="password" placeholder="password" />
        {touched.password && errors.password && <p className="error">{errors.password}</p>}


         <h2>Your Role</h2>
        <Field component="select" className="role-select" name="role">
          <option>Please Choose an Option</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Volunteer">Volunteer</option>
        </Field>
        {touched.role && errors.role && <p className="error">{errors.role}</p>}
        <StyledButton type="submit">Sign up!</StyledButton>
      </Form>
 </StyledDiv>
  );
};


const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, role, tos, password }) {
    return {
      tos: tos || false,
      role: role || "",
      name: name || "",
      email: email || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Username required"),
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required"),
    role: Yup.string()
      .oneOf(["Admin", "Volunteer", "Manager"])
      .required("Please choose one!")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      // values is our object with all our data on it.
      .post("https://serve-soups.herokuapp.com/api/auth/register", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(UserForm); // currying functions in Javascript
console.log("This is the HOC", FormikUserForm);
export default FormikUserForm;