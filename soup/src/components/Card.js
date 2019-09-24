import React from "react";

export const Card = props => {
    <div className="card">
    <h3>{props.name}</h3>
    <p>Quantity: {props.quantity} {props.measure}</p>
    </div>
}