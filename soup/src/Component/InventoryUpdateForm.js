import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
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

const InvForm = (props) => {
  
  const [food, setFood] = useState({
    item_name: "",
	  quantity : "",
	  price: "",
	  alert_when: "",
	  kit_id: "",
	  unit_id: "",
	  cat_id: "",
	  user_id: ""
  });

  const addItem = (e) => {
    e.preventDefault();
     axiosWithAuth()
        .post('https://serve-soups.herokuapp.com/api/inventory', food)
        .then(res => console.log(res))
        props.history.push('/inventory')
    }

    const handleChange = e => {
        setFood({
            ...food,
            [e.target.name]: e.target.value
        })
    }


  return (
    <>
    <StyledDiv>
    <h1>Registration</h1>
      <form onSubmit={addItem}>
        <input
        type="text"
        name="item_name"
        value={food.item_name}
        placeholder="Item Name"
        onChange={handleChange}
        />
      
      <input
        type="text"
        name="quantity"
        value={food.quantity}
        placeholder="Quantity"
        onChange={handleChange}
        />

        <input
        type="text"
        name="price"
        value={food.price}
        placeholder="Price"
        onChange={handleChange}
        />

        <input
        type="text"
        name="alert_when"
        value={food.alert_when}
        placeholder="Alert Me When Below..."
        onChange={handleChange}
        />
      
        <StyledButton>Add Item</StyledButton>
      </form>
      </StyledDiv>
    </>
  );
};

export default InvForm;