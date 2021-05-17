import { Fragment } from 'react';
import { Fade, makeStyles, Grid, Button, Toolbar, AppBar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Order from '../components/Order';
import Header from '../components/Header';
import Listener from './Listener';

import * as UIActions from '../store/restaurant/restaurant.actions';


const useStyles = makeStyles((theme) => ({
    main: {
        position: 'relative',
        top: '90px',
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        width: "80%",
        overflow: "auto",
        border: "solid",
        opacity: 50,

        "& .app-bar": {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
            backgroundColor: "#A4A4A4",
            boxShadow: "0 8px 16px 0 rgb(0,0,0)",
            minWidth: "790px",

            "& .title-bar": {
                "& .wrapper": {
                    minHeight: "100%",
                    display: "flex",
                },
            },
        },

        "& .container": {
            height: 645,
            overflow: "auto",
            backgroundColor: "#E7DD95",
            color: "#fff",
            padding: 30,
            minWidth: "790px",
            "& .wrapper": {
                display: "flex",
                width: "100%",
            },
        },
    }
}))

export default (props) => {
    const classes = useStyles();
    const showUI = useSelector((state) => state.restaurant.showUI);
    const menuData = useSelector((state) => state.restaurant.menu_data);
    

    const renderEnvironment = () => {
        if (process.env.NODE_ENV === "development") { // Development
            return (
                <Fade in={showUI} timeout={1000,1000}>
                    <div className={classes.main}>
                        <Listener />
                        <Header menuData={menuData}/>
                        <Grid className="container" container>
                            <Grid className="wrapper" justify="center" container>{props.children}</Grid>
                        </Grid>
                    </div>
                </Fade>
            )
        } else { // Live
            return (
                <Fade in={showUI} timeout={1000,1000}>
                    <div className={classes.main}>
                        <Listener />
                        <Header menuData={menuData}/>
                        <Grid container className="container" justify="space-evenly">
                            {props.children}
                        </Grid>
                    </div>
                </Fade>
            )
        }
    }
    return <Fragment>{renderEnvironment()}</Fragment>;
}