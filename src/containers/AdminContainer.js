import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Admin from '../components/Admin';

const useStyles = makeStyles((theme) => ({

}))

const AdminContainer = () => {
    const classes = useStyles();
    const {foodData} = useSelector((state) => ({
        foodData: state.restaurant.food_items,
    }))

    return (
        <Fragment>
            <Admin foodData={foodData}/>
        </Fragment>
    )
}

export default AdminContainer;