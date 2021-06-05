import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Order from '../components/Order';

const useStyles = makeStyles((theme) => ({

}))

const OrderContainer = () => {
    const classes = useStyles();
    const {orderData} = useSelector((state) => ({
        orderData: state.restaurant.orders
    }));

    const cookOrder = () => {
        console.log("cooking Order")
    }

    return (
        <Fragment>
            <Order orderData={orderData} cookOrder={cookOrder}/>
        </Fragment>
    )
}

export default OrderContainer;