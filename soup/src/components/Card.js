import React from "react";

function Card(props){
    return(
    <div className="card">
    <h3>{props.name}</h3>
    <p>Quantity: {props.quantity} {props.measure}</p>
    </div>
    )
}

export default Card;