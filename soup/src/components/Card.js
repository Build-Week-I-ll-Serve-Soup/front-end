import React from "react";


function Card(props){

let alert = null;

if(props.quantity <= props.alert_when)
    {alert = "RUNNING LOW"}

    return(
    <div className="card">
    <h3>{props.name}</h3>
    <p>Quantity: {props.quantity} {props.unit}</p>
    <p>Price: ${props.cost}</p>
    <h4>{alert}</h4>
    <button onClick={props.editFood}>Edit</button>
    </div>
    )
}

export default Card;