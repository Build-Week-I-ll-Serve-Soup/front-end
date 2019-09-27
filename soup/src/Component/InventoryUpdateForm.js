import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import styled from "styled-components"

const StyledDiv = styled.div`
    width: 50%;
    padding:25%;
    background-color: #BB4142;
    padding-top:5%;
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
    item_name: " ",
	  quantity : Number(" "),
	  price: Number(" "),
    alert_when: Number(" "),
	  kit_id: Date.now(),
	  unit_id: Date.now(),
	  cat_id: Date.now(),
	  user_id: Date.now()
  });

  const handleChange = e => {
    setFood({
        ...food,
        [e.target.name]: e.target.value
    })
  }

  const addItem = (e) => {
    e.preventDefault()
   let postFood = {
     item_name: food.item_name,
     quantity: Number(food.quantity),
     price: Number(food.price),
     alert_when: Number(food.alert_when),
     kit_id: Number(1),
     unit_id: Number(1),
     cat_id: Number(1),
     user_id: Number(1)
   }
     axiosWithAuth()
        .post('https://serve-soups.herokuapp.com/api/inventory/post', postFood)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        props.history.push('/inventory')
    }

  
  return (
    <>
    <StyledDiv>

    <h1>Add an Inventory Item</h1>

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