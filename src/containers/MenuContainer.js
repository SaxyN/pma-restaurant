import React, {Fragment, useEffect} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { makeStyles, Typography, Grid, Button, Card, CardActions, CardContent, Paper, CardMedia, ListItem, ListItemText, ListItemSecondaryAction, ButtonGroup, Divider, List, Box, AccordionSummary, Accordion, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import * as restActions from '../store/restaurant/restaurant.actions';
import Cart from '../components/Cart';
import Menu from '../components/Menu';

import ItemImage from '../components/ItemImage';

import Cart2 from '../components/menustuff/Cart2';
import Menu2 from '../components/menustuff/Menu2';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        "& .card": {
            minWidth: "150px",
            width: "100%",
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
            paddingBottom: "16px",
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

const MenuContainer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {cartData, foodData, userData} = useSelector((state) => ({
        cartData: state.restaurant.cart,
        foodData: state.restaurant.food_items,
        userData: state.restaurant.user_data,
    }));

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
            // const newData = cartData;
            // newData.push({label: label, name: name, cost: cost, count: 1});
            // console.log(newData);
            // dispatch(restActions.updateCart(newData));
        }
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
                // if (newData[i].count - 1 === 0) {
                //     newData.splice(i, 1);
                // } else {
                //     newData[i].count -= 1;
                //     newData[i].cost = newData[i].cost - cost;
                // }
                console.log(newData);
                dispatch(restActions.updateCart(newData));
                break;
            } 
        }
        if (!found) {
            console.log("Hmm how did we get here")
            // const newData = cartData;
            // newData.push({label: label, name: name, cost: cost, count: 1});
            // console.log(newData);
            // dispatch(restActions.updateCart(newData));
        }
    }

    const handleCartAdd = (label, name, cost) => {
        console.log("Adding to Cart: " + label, name, cost)
        var i;
        var found = false;
        for(i = 0; i < cartData.length; i++) {
            if (cartData[i].name === name) {
                found = true
                if (cartData[i].count + 1 <= 5) {
                    const newData = cartData;
                    newData[i].count += 1;
                    newData[i].cost = newData[i].cost + cost;
                    console.log(newData);
                    dispatch(restActions.updateCart(newData));
                    break;
                } else {
                    break;
                }
            } 
        }
        if (!found) {
            const newData = cartData;
            newData.push({label: label, name: name, cost: cost, count: 1});
            console.log(newData);
            dispatch(restActions.updateCart(newData));
        }
    }

    const handleCartBulkAdd = (label, name, cost) => {
        console.log("Adding to Cart: " + label, name, cost)
        var i;
        var found = false;
        for(i = 0; i < cartData.length; i++) {
            if (cartData[i].name === name) {
                found = true
                if ( cartData[i].count + 25 <= 25) {
                    const newData = cartData;
                    newData[i].count += 25;
                    newData[i].cost = newData[i].cost + cost*25;
                    console.log(newData);
                    dispatch(restActions.updateCart(newData));
                    break;
                } else {
                    break;
                }
            } 
        }
        if (!found) {
            const newData = cartData;
            newData.push({label: label, name: name, cost: cost*25, count: 25});
            console.log(newData);
            dispatch(restActions.updateCart(newData));
        }
    }

    const placeOrder = () => {
        console.log("Order Placed");
    }

    return (
        <div style={{display: "flex"}}>
            <Menu2
                handleCartAdd={handleCartAdd}
                handleCartBulkAdd={handleCartBulkAdd}
                foodData={foodData}
                userData={userData}
            />
            <Cart2
                cartData={cartData}
                handleCartRemove={handleCartRemove}
                handleCartAdd={handleCartAdd}
            />
        </div>
    )
}

export default MenuContainer;