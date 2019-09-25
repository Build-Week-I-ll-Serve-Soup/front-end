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
    background-color: #CA5930;
    border: 2px dotted black;
    margin-bottom:15px;
    margin-top:10px;
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
    margin-top:20px;
    display:flex;
    justify-content:space-between;

`
const StyledButton1 = styled.button`
    max-width: 150px;
    padding: 12px 20px;
    border-style: none;
    background-color: #fff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 17px;
    font-weight: 500;
    color: #52B402;
    margin-top:20px;
    display:flex;
    justify-content:space-between;
    border:2px solid #52B402;

`

const InvForm = ({ errors, touched, values, status }) => {
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    status && setUpdate(update => [...update, status]);
  }, [status]);

  return (
    
    <StyledDiv className="Update-form"> 
          <h1>Update Inventory</h1>
      <Form>
        <Field type="text" name="item_name" placeholder="item name" />
        {touched.item_name && errors.item_name && (
          <p className="error">{errors.item_name}</p>
        )}

        <Field type="number" name="quantity" placeholder="quantity" />
        {touched.quantity && errors.quantity && <p className="error">{errors.quantity}</p>}
           
        <Field type="text" name="unit" placeholder="unit" />
        {touched.unit && errors.unit && <p className="error">{errors.unit}</p>}

        {touched.catNumber && errors.catNumber && <p className="error">{errors.catNumber}</p>}
            <h2>Category</h2>
         <Field component="select" className="cat-name" name="cat_name">
          <option>Please Choose an Option</option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="canned">Canned goods</option>
          <option value="dry">Dried goods</option>
          <option value="other">Other</option>
        </Field>
        {touched.cat_name && errors.cat_name && <p className="error">{errors.cat_name}</p>}

        <Field type="text" name="price" placeholder="price" />
        {touched.price && errors.price && <p className="error">{errors.price}</p>}

         <h2>Alert when when below</h2>
        <Field type="number" name="alert_when" placeholder="number" />
        {touched.alert_when && errors.alert_when && <p className="error">{errors.alert_when}</p>}
        
        <Field component="select" className="cat_name" name="cat_name">
          <option>Please Choose an Option</option>
          <option value="pounds">Pounds</option>
          <option value="grams">Grams</option>
          <option value="cups">Cups</option>
          <option value="packages">Packages</option>
          <option value="cans">Cans</option>
          <option value="other">other</option>
        </Field>
        {touched.cat_name && errors.cat_name && <p className="error">{errors.cat_name}</p>}
      </Form>
         <StyledButton type="submit">Update!</StyledButton>
         <StyledButton1 type="submit">Discard!</StyledButton1>
 </StyledDiv>
  );
};


const FormikUpdateForm = withFormik({
  mapPropsToValues({ item_name, unit, quantity, cat_name, alert_when }) {
    return {
      cat_name: cat_name || "",
      item_name: item_name || "",
      quantity: quantity || "",
      alert_when: alert_when || "",
      unit: unit || "",
    };
  },

  validationSchema: Yup.object().shape({
    item_name: Yup.string().required("item required"),
    quantity: Yup.string().required("amount Required"),
    alert_when: Yup.string().required("please choose a number"),
    cat_name: Yup.string()
      .required("Please choose one!"),
    unit: Yup.string("unit required")
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
})(InvForm); 
console.log("This is the HOC", FormikUpdateForm);
export default FormikUpdateForm;