import React, { Fragment } from 'react';
import { makeStyles, Typography, Grid, Button, Card, CardActions, CardContent, Paper, CardMedia, ListItem, ListItemText, ListItemSecondaryAction, ButtonGroup, Divider, List } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import withMainMenu from '../hoc/withMainMenu';
import ItemImage from './ItemImage';
import * as restActions from '../store/restaurant/restaurant.actions';

import Cart from './Cart';

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

    cardMain: {
        minWidth: 175,
        // maxWidth: 175,
        textAlign: 'center',
        "& .image": {
            width: 135,
            height: 100,
            margin: "auto",
            objectFit: "contain",
        },
        "& .cardContent": {
            
        },
        "& .cardActions": {
            textAlign: "center",
            justifyContent: "center",
        }
    },
    cartCard: {
        maxWidth: 100,
        textAlign: "center",
        "& .cardContent": {
            
        },
        "& .cardActions": {
            textAlign: "center",
            justifyContent: "center",
        }
    },

    cartItem: {
    },

    cartButtonGroup: {
        "& .MuiButtonGroup-grouped": {
            minWidth: "10px",
            maxHeight: "10px",
        },

    },

    errorDiv: {
        marginTop: "25px"
    }
}))

const Menu = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const menuData = useSelector((state) => state.restaurant.menu_data);
    const foodData = useSelector((state) => state.restaurant.food_items);
    const cartData = useSelector((state) => state.restaurant.cart);

    const placeOrder = () => {
        console.log("Order Placed");
    }

    const handleCartUpdate = (label, name, cost) => {
        console.log(label, name, cost)
        var i;
        var found = false;
        for(i = 0; i < cartData.length; i++) {
            if (cartData[i].name === name) {
                found = true
                const newData = cartData
                newData[i].count += 1;
                newData[i].cost += cost;
                console.log(newData);
                dispatch(restActions.updateCart(newData));
                break;
            }
        }
        if (!found) {
            const newData = cartData;
            newData.push({label: label, name: name, cost: cost, count: 1});
            console.log(newData);
            dispatch(restActions.updateCart(newData));
        }
    }

    const handleCartRemove = (name, label) => {

    }

    const renderMenu = () => {
        if (foodData) {
            return foodData.map((item, index) => {
                return (
                    <Grid item key={index} xs={3}>
                        <Card className={classes.cardMain}>
                            <CardContent className="cardContent">
                                <ItemImage name={item.img} />
                                <Typography variant="h5" component="h2">{item.name}</Typography>
                                <Typography color="textSecondary" component="p">${item.cost}</Typography>
                            </CardContent>
                            <CardActions className="cardActions">
                                <Button size="small" color="primary" variant="outlined" onClick={() => handleCartUpdate(item.name, item.img, item.cost)}>
                                    Add To Order
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })
        } else {
            return (
                <div className={classes.errorDiv}>
                    <Typography>ERROR LOADING! Reopen the application!</Typography>
                </div>
            )
        }
    }

    const renderCart = () => {
        console.log(cartData.length);
        if (Object.keys(cartData).length > 0) {
            console.log(cartData);
            return cartData
            // .sort((a,b) => b.cost - a.cost)
            .map((item, index) => {
                return (
                    <ListItem key={index} dense>
                        <ListItemText primary={item.label} secondary={
                            <Fragment>
                                ${item.cost*item.count}
                            </Fragment>
                        }/>
                        <ListItemSecondaryAction style={{top: "65%"}}>
                            <ButtonGroup className={classes.cartButtonGroup} variant="text">
                                <Button onClick={() => handleCartRemove(item.label, item.name)}>-</Button>
                                <Button><strong>{item.count}</strong></Button>
                                <Button onClick={() => handleCartUpdate(item.label, item.name)}>+</Button>
                            </ButtonGroup>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })
        } else {
            return <Typography style={{ textAlign: "center"}} variant="body2" color="textSecondary">Empty</Typography>;
        }
    }

    return (
        <Fragment>
            <div className={classes.mainDiv}>
                <Card className="card">
                    <Grid container justify="space-evenly" spacing={3}>
                        {renderMenu()}
                    </Grid>
                </Card>
                <Card className="card">
                    <Typography className="listTitle" component="h2">Cart</Typography>
                    <Divider orientation="horizontal" />
                    <List>
                        {renderCart()}
                    </List>
                    <div style={{ textAlign: "center" }}>
                        <Button className="submitButton" variant="contained" color="primary" onClick={() => placeOrder()}>Submit Order</Button>
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}

export default Menu;