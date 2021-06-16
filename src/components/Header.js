import React, { Fragment } from 'react';
import { makeStyles, Typography, AppBar, Grid, Toolbar, Button, Box, ButtonGroup, Popover, Paper, Card, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import * as restActions from '../store/restaurant/restaurant.actions';
import anotherJson from '../helpers/anotherJson.json';
import * as apis from '../apis/apis';

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
    card: {
        // display: "flex",
        // width: "100%",
        justifyContent: "center",
        minWidth: "300px",
        backgroundColor: "#C0B87E",
        padding: "10px",
        "& .listTitle": {
            textAlign: "center"
        },
        "& .input": {

        },
        "& .submitButton": {
            marginTop: "6px",
            marginBottom: "6px",
        }
    },
    topBottons: {
        textDecoration: "none",
        cursor: "pointer",
    }
}))

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {userData, menuData, cartData} = useSelector((state) => ({
        userData: state.restaurant.user_data,
        menuData: state.restaurant.menu_data,
        cartData: state.restaurant.cart,
    }))
    // const userData = useSelector((state) => state.restaurant.user_data);
    // const menuData = useSelector((state) => state.restaurant.menu_data);
    // const cartData = useSelector((state) => state.restaurant.cart);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const closeApplication = () => {
        apis.closeTablet();
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simply-popover' : undefined;

    const handleCartRemove = (label, name, cost) => {
        console.log("Removing from Cart: " + label, name, cost)
        var i;
        var found = false;
        for(i = 0; i < cartData.length; i++) {
            if (cartData[i].name === name) {
                found = true
                const newData = cartData;
                if (newData[i].count - 1 === 0) {
                    newData.splice(i, 1);
                } else {
                    newData[i].count -= 1;
                    newData[i].cost = newData[i].cost - cost;
                }
                console.log(newData);
                dispatch(restActions.updateCart(newData));
                break;
            } 
        }
        if (!found) {
            console.log("Hmm how did we get here")
        }
        // handleClose()
    }

    const handleCartFullRemove = (label, name, cost) => {
        console.log("Removing from Cart: " + label, name, cost)
        var i;
        var found = false;
        for(i = 0; i < cartData.length; i++) {
            if (cartData[i].name === name) {
                found = true
                const newData = cartData;
                newData.splice(i, 1);
                console.log(newData);
                dispatch(restActions.updateCart(newData));
                break;
            } 
        }
        if (!found) {
            console.log("Hmm how did we get here")
        }
        // handleClose()
    }

    const renderHeader = () => {
        if (menuData) {
            return (
                <AppBar position="static" className="app-bar">
                    <Toolbar className="title-bar">
                        <Grid justify="flex-start" container>
                            <Typography variant="h6">{menuData}</Typography>
                        </Grid>
                        <Grid item justify="center" container>
                            <ButtonGroup>

                                <Button component={Link} to={"/"} className={classes.topBottons}>
                                    Menu
                                </Button>

                                <Button component={Link} to={"/orders"} className={classes.topBottons}>Orders</Button>
                                {
                                    userData.job_name === "boss" ?
                                        <Button component={Link} to={"/admin"} className={classes.topBottons}>Admin</Button> :
                                        <Button component={Link} to={"/admin"} className={classes.topBottons} disabled>Admin</Button>
                                }
                            </ButtonGroup>
                        </Grid>
                        {/* <Grid>
                            <Box>
                                <Button aria-describedby={id} variant="outlined" onClick={(e) => handleClick(e)}>
                                    Cart
                                </Button>
                            </Box>
                            <Popover id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "left" }} transformOrigin={{ vertical: "top", horizontal: "left" }}>
                                <Card className={classes.card}>
                                    <Typography className="listTitle" component="h2">Cart</Typography>
                                    <Divider orientation="horizontal" />
                                    <List>
                                        {renderCart()}
                                    </List>
                                    {cartData.length > 0 ?                                     <div style={{ textAlign: "center" }}> */}
                                        {/* <TextField className="input" size="medium" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/> */}
{/* 
                                        <Button className="submitButton" variant="contained" color="primary" onClick={() => placeOrder()}>Submit Order</Button>
                                    </div> : null
                                    }

                                </Card>
                            </Popover>
                        </Grid> */}
                        <Grid className="wrapper" justify="flex-end" container>
                            <Box className="wrapper">
                                <Button onClick={() => closeApplication()}>
                                    EXIT
                                </Button>
                            </Box>
                        </Grid>
                    </Toolbar>
                </AppBar>
            )
        }
    }

    const renderCart = () => {
        if (cartData.length > 0) {
            return cartData.map((item, index) => {
                return (
                    <ListItem key={index} dense>
                        <ListItemText primary={item.label} secondary={
                            <Fragment>
                                ${item.cost}
                            </Fragment>
                        } />
                        <ListItemSecondaryAction style={{ top: "65%" }}>
                            <ButtonGroup className={classes.cartButtonGroup} variant="text">
                                <Button onClick={() => handleCartRemove(item.label, item.name, item.cost/item.count)}>-</Button>
                                <Button><strong>{item.count}</strong></Button>
                                <Button onClick={() => handleCartFullRemove(item.label, item.name, item.cost)}><DeleteIcon /></Button>
                            </ButtonGroup>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })
        } else {
            return (
                <Typography style={{textAlign: "center"}}>Empty!</Typography>
            )
        }
    }

    return <Fragment>{renderHeader()}</Fragment>
}

export default Header;