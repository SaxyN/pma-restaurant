import React, {Fragment, useState} from 'react';
import { makeStyles, Grid, Card, TextField, Typography, List, Divider, Button} from '@material-ui/core';
import { useSelector } from 'react-redux';
import withMainMenu from '../hoc/withMainMenu';
import Cart from './Cart';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        display: "flex",
        // width: "100%",
        justifyContent: "center",
        "& .card": {
            minWidth: "150px",
            backgroundColor: "#C0B87E",
            padding: "10px",
            "& .listTitle": {
                textAlign: "center"
            }
        },
        "& .input": {
            
        },
        "& .submitButton": {
            marginTop: "6px",
            marginBottom: "6px",
        }
    },
}))

const MainMenu = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Menu />
            <Cart />
        </Fragment>
    )
}

export default MainMenu;