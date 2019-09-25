import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {getInventory} from '../actions';
import Card from './Card';
import {connect} from 'react-redux';

const InventoryList = ({getInventory, inventory, isFetching, error}) => {
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
        />)}
        </div>
        <Link to="/add"><button className="add">Add Something</button></Link>
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

