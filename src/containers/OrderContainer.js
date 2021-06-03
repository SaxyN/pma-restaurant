import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Order from '../components/Order';

const useStyles = makeStyles((theme) => ({

}))

const OrderContainer = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Order />
        </Fragment>
    )
}

export default OrderContainer;