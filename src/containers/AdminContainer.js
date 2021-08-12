import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Admin from '../components/Admin';

const useStyles = makeStyles((theme) => ({

}))

const AdminContainer = () => {
    const classes = useStyles();
    const {foodData, tempPrice, selectedItem} = useSelector((state) => ({
        foodData: state.restaurant.food_items,
        tempPrice: state.restaurant.tempPrice,
        selectedItem: state.restaurant.selectedItem,
    }));

    const {companies, currentCompany} = useSelector((state) => ({
        companies: state.supply.supply_companies,
        currentCompany: state.supply.currentCompany,
    }))

    return (
        <Fragment>
            <Admin
                foodData={foodData}
                tempPrice={tempPrice}
                selectedItem={selectedItem}
                companies={companies}
                currentCompany={currentCompany}
            />
        </Fragment>
    )
}

export default AdminContainer;