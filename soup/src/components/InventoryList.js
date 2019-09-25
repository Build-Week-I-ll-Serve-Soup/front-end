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
        <div>
        {inventory.map(item =>
            <Card
                name={item.item_name}
                quantity={item.quantity}
                measure={item.unit}
        />)}
        <Link to="/add"><button>Add Something</button></Link>
        </div>
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

