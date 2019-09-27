import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getInventory} from '../actions';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Card from './Card';
import {connect} from 'react-redux';

const initialFood = {
    id: "",
    item_name: "",
    quantity : "",
    price: "",
    alert_when: "",
    kit_id: Date.now(),
    unit_id: Date.now(),
    cat_id: Date.now(),
    user_id: Date.now()
}

const InventoryList = ({getInventory, inventory, isFetching, error}) => {

    const [editing, setEditing] = useState(false);
    const [foodToEdit, setFoodToEdit] = useState(initialFood);

    const editFood = food => {
        setEditing(true);
        setFoodToEdit(food);
    };

    const saveFood = e => {
        e.preventDefault();
        axiosWithAuth()
          .put(`https://serve-soups.herokuapp.com/api/inventory/${foodToEdit.id}`, foodToEdit)
          .then(window.location.reload(false))
          .catch(err=>console.log(err))
      };

    useEffect(() => {
        getInventory();
    }, [getInventory]);

    if(isFetching){
        return <p>Seeing what we have in stock right now . . .</p>
    }

   

 

    return(
        <>
        <div className="deck">
        {inventory.map(item =>
            <Card
                name={item.item_name}
                quantity={item.quantity}
                cost={item.price}
                alert_when={item.alert_when}
                unit={item.unit}
                editFood={editFood}
        />)}
        </div>
        
        <Link to="/add">
            <button className="add">Add Something</button>
        </Link>
        
    <div className="edit">
      {editing && (
        <form onSubmit={saveFood}>
          <legend>Edit Item</legend>
          <label>
            Quantity:
            <input
              onChange={e =>
                setFoodToEdit({ ...foodToEdit, food: e.target.value })
              }
              value={foodToEdit.quantity}
            />
          </label>
          <label>
            Weight (Units):
            <input
              onChange={e =>
                setFoodToEdit({ ...foodToEdit, food: e.target.value })
              }
              value={foodToEdit.unit_id}
            />
          </label>
          <label>
            Value:
            <input
              onChange={e =>
                setFoodToEdit({ ...foodToEdit, food: e.target.value })
              }
              value={foodToEdit.price}
            />
          </label>
          
          <div>
            <button type="submit">Update</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
          </form>
      )}
      </div>
    </>
    )
}

const mapStateToProps = state => {
    return{
        inventory: state.inventory,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {getInventory}
)(InventoryList);

