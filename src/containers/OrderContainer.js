import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import * as apis from '../apis/apis.js';

import Order from '../components/Order';

const useStyles = makeStyles((theme) => ({

}))

const OrderContainer = () => {
    const classes = useStyles();
    const {orderData, userData} = useSelector((state) => ({
        orderData: state.restaurant.orders,
        userData: state.restaurant.user_data,
    }));

    const cookOrder = (order) => {
        apis.cookOrder(order);
    }
    
    const deleteOrder = (order) => {
        apis.deleteOrder(order);
    }

    return (
        <Fragment>
            <Order orderData={orderData} cookOrder={cookOrder} deleteOrder={deleteOrder}/>
        </Fragment>
    )
}

export default OrderContainer;