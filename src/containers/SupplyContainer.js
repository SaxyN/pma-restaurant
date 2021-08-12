import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import * as supplyActions from '../store/supply/supply.actions';

import OrderPage from '../components/OrderPage';

const useStyles = makeStyles((theme) => ({

}))

const SupplyContainer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {companies, currentCompany, ingredients, modalOpen} = useSelector((state) => ({
        companies: state.supply.supply_companies,
        currentCompany: state.supply.currentCompany,
        ingredients: state.supply.ingredients,
        modalOpen: state.supply.modalOpen,
    }))

    const handleClose = () => {
        dispatch()
    }

    const handleCompanySelect = (company) => {
        if (company !== currentCompany) {
            dispatch(supplyActions.selectCompany(company));
        } 
    }

    return (
        <Fragment>
            <OrderPage
                companies={companies}
                currentCompany={currentCompany}
                ingredients={ingredients}
                modalOpen={modalOpen}
                handleCompanySelect={handleCompanySelect} 
            />
        </Fragment>    
    )
}

export default SupplyContainer;