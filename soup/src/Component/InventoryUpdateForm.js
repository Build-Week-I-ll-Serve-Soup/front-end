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
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    status && setUpdate(update => [...update, status]);
  }, [status]);

  return (
    
    <StyledDiv className="Update-form"> 
          <h1>Update Inventory</h1>
      <Form>
        <Field type="text" name="name" placeholder="item name" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <Field type="number" name="amount" placeholder="amount" />
        {touched.amount && errors.amount && <p className="error">{errors.amount}</p>}
        
         <h2>Category</h2>
        <Field component="select" className="amount-select" name="amountNumber">
          <option>Please Choose an Option</option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="canned">Canned goods</option>
          <option value="dry">dried goods</option>
          <option value="other">Other</option>
        </Field>
        {touched.amountNumber && errors.amountNumber && <p className="error">{errors.amountNumber}</p>}
        
         <h2>Amount</h2>
        <Field component="select" className="cat-select" name="catNumber">
          <option>Please Choose an Option</option>
          <option value="pounds">Pounds</option>
          <option value="grams">Grams</option>
          <option value="cups">Cups</option>
          <option value="packages">Packages</option>
          <option value="cans">Cans</option>
        </Field>
        {touched.catNumber && errors.catNumber && <p className="error">{errors.catNumber}</p>}
         
         <h2>Alert when below</h2>
        <Field type="number" name="alert" placeholder="number" />
        {touched.alert && errors.alert && <p className="error">{errors.alert}</p>}
        
        <Field component="select" className="cat-select" name="alertNumber">
          <option>Please Choose an Option</option>
          <option value="pounds">Pounds</option>
          <option value="grams">Grams</option>
          <option value="cups">Cups</option>
          <option value="packages">Packages</option>
          <option value="cans">Cans</option>
        </Field>
        {touched.alertNumber && errors.alertNumber && <p className="error">{errors.alertNumber}</p>}
      </Form>
         <StyledButton type="submit">Update!</StyledButton>
 </StyledDiv>
  );
};


const FormikUpdateForm = withFormik({
  mapPropsToValues({ name, amount, amountNumber, alert }) {
    return {
      amountNumber: amountNumber || "",
      name: name || "",
      amount: amount || "",
      alert: alert || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Username required"),
    amount: Yup.string().required("amount Required"),
    alert: Yup.string().required("alert Required"),
    amountNumber: Yup.string()
      .required("Please choose one!")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(UserForm); 
console.log("This is the HOC", FormikUpdateForm);
export default FormikUpdateForm;