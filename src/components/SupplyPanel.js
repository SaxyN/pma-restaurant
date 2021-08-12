import React, { Fragment } from 'react';
import { makeStyles, Grid, ListItem, List, ListItemText, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import CompanyView from './CompanyView';

import { showCompany } from '../store/supply/supply.actions';

import ItemImage from './ItemImage';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        margin: "10px"
    },
    mainGrid: {
        padding: "0px",
        display: "flex",
    },
    companyList: {
        height: "3rem",
        width: "175px",
    },
    mainDiv: {
        display: "flex",
        textAlign: "center",
    },
    drawer: {
        width: 150,
        maxWidth: 150,
        left: 0,
        top: 0,
        bottom: 0,
        display: "absolute",
    },
}))

const SupplyPanel = ({ companies, currentCompany }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className={classes.mainDiv}>
            <div className={classes.drawer}>
                <List>
                    {companies.map((company, index) => {
                        return (
                            <ListItem key={index} dense button className={classes.companyList} onClick={() => dispatch(showCompany(company))}>
                                <ListItemText primary={company.name} />
                            </ListItem>
                        )
                    })}
                </List>
            </div>
            <CompanyView currentCompany={currentCompany}/>
        </div>
    )
}

export default SupplyPanel;