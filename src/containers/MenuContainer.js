import React, {Fragment, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    const cartData = useSelector((state) => state.restaurant.cart);
    const foodData = useSelector((state) => state.restaurant.food_items);
    const userData = useSelector((state) => state.restaurant.user_data);    
    // useEffect(()=> {}, [cartData]);

    // const handleCartUpdate = (label, name, cost) => {
    //     console.log(label, name, cost)
    //     var i;
    //     var found = false;
    //     for(i = 0; i < cartData.length; i++) {
    //         if (cartData[i].name === name) {
    //             found = true
    //             const newData = cartData
    //             newData[i].count += 1;
    //             newData[i].cost += cost;
    //             console.log(newData);
    //             dispatch(restActions.updateCart(newData));
    //             break;
    //         }
    //     }
    //     if (!found) {
    //         const newData = cartData;
    //         newData.push({label: label, name: name, cost: cost, count: 1});
    //         console.log(newData);
    //         dispatch(restActions.updateCart(newData));
    //     }
    // }

    // const handleCartRemove = (name, label) => {

    // }

    // const handleCartUpdate = (label, name, cost) => {
    //     console.log(label, name, cost)
    //     var i;
    //     var found = false;
    //     for(i = 0; i < cart.length; i++) {
    //         if (cart[i].name === name) {
    //             found = true
    //             const newData = cart;
    //             newData[i].count += 1;
    //             newData[i].cost = newData[i].cost + cost;
    //             console.log(newData);
    //             setCart(newData);
    //             dispatch(restActions.updateCart(newData, menuData));
    //             break;
    //         }
    //     }
    //     if (!found) {
    //         const newData = cart;
    //         newData.push({label: label, name: name, cost: cost, count: 1});
    //         console.log(newData);
    //         dispatch(restActions.updateCart(newData, menuData));
    //     }
    // }

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
        handleClose()
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
        handleClose()
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
 
    // const handleCartRemove = (label, name, cost) => {
    //     console.log("Removing from Cart: " + label, name, cost)
    //     var i;
    //     var found = false;
    //     for(i = 0; i < cartData.length; i++) {
    //         if (cartData[i].name === name) {
    //             found = true
    //             const newData = cartData;
    //             if (newData[i].count - 1 === 0) {
    //                 newData.splice(i, 1);
    //             } else {
    //                 newData[i].count -= 1;
    //                 newData[i].cost = newData[i].cost - cost;
    //             }
    //             console.log(newData);
    //             dispatch(restActions.updateCart(newData));
    //             break;
    //         } 
    //     }
    //     if (!found) {
    //         console.log("Hmm how did we get here")
    //         // const newData = cartData;
    //         // newData.push({label: label, name: name, cost: cost, count: 1});
    //         // console.log(newData);
    //         // dispatch(restActions.updateCart(newData));
    //     }
    // }

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
                                {/* <ButtonGroup> */}
                                    {/* {   item.in_cart === 0 
                                        ?
                                        <Button disabled size="small" color="primary" variant="outlined">-</Button>
                                        :
                                        <Button size="small" color="primary" variant="outlined" onClick={() => handleCartRemove(item.name, item.img, item.cost)}>-</Button>
                                    } */}
                                    {/* <Button size="small" color="primary" variant="outlined" onClick={() => handleCartRemove(item.name, item.img, item.cost)}>-</Button> */}
                                    {/* <Button size="small" >{item.in_cart}</Button>
                                    <Button size="small" color="primary" variant="outlined" onClick={() => handleCartAdd(item.name, item.img, item.cost)}>+</Button>
                                </ButtonGroup> */}
                                {
                                    userData.job_name === "boss" ?
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}>
                                            <Typography color="textSecondary" variant="body1">Purchase Options</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container justify="center" spacing={3}>
                                                <Grid item><Button onClick={() => handleCartAdd(item.name, item.img, item.cost)}>Add To Order</Button></Grid>
                                                <Grid item><Button onClick={() => handleCartBulkAdd(item.name, item.img, item.cost)}>Bulk Order</Button></Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                    :
                                    <Button className="submitButton" variant="outlined" onClick={() => handleCartAdd(item.name, item.img, item.cost)}>Add To Order</Button>
                                }
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

    // const renderMenuFooter = () => {
    //     if (foodData) {
    //         return (
    //             <Typography>Footer Will Go Here</Typography>
    //         )
    //     }
    // }

    // const renderCart = () => {
    //     console.log(cart.length);
    //     console.log("cart render");        
    //     if (Object.keys(cart).length > 0) {
    //         // setCart(cartData);
    //         // console.log(cart);
    //         return cartData.map((item, index) => {
    //             return (
    //                 <ListItem key={index} dense>
    //                     <ListItemText primary={item.label} secondary={
    //                         <Fragment>
    //                             ${item.cost*item.count}
    //                         </Fragment>
    //                     }/>
    //                     <ListItemSecondaryAction style={{top: "65%"}}>
    //                         <ButtonGroup className={classes.cartButtonGroup} variant="text">
    //                             <Button onClick={() => handleCartRemove(item.label, item.name, item.cost)}>-</Button>
    //                             <Button><strong>{item.count}</strong></Button>
    //                             <Button onClick={() => handleCartUpdate(item.label, item.name, item.cost)}>+</Button>
    //                         </ButtonGroup>
    //                     </ListItemSecondaryAction>
    //                 </ListItem>
    //             )
    //         })
    //     } else {
    //         return <Typography style={{ textAlign: "center"}} variant="body2" color="textSecondary">Empty</Typography>;
    //     }
    // }

    const placeOrder = () => {
        console.log("Order Placed");
    }

    return (
        <Fragment>
            {/* <Menu 
                renderMenu={renderMenu}
                foodData={foodData}
                placeOrder={placeOrder}
            /> */}
            {/* <Cart cart={cartData}/> */}
            <Menu2 />
            <Cart2 />
        </Fragment>
    )
}

export default MenuContainer;