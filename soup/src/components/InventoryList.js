import React from "react";
import axios from "axios";
import Card from './Card';
import {connect} from 'react-redux';

const InventoryList = ({getInventory, inventory, isFetching, error}) => {
    useEffect(()=>{
        getInventory()
    }, [getInventory])

    if(isFetching){
        return <p>Seeing what we have in stock right now . . .</p>
    }

    console.log(inventory)

    return(
        <div>
        {inventory.map(item =>
            <Card
                name={item.name}
                quantity={item.quantity}
                measure={item.measure}
        />)}
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

