import React, { Fragment } from 'react';
import { makeStyles, Typography, Grid, Button, Card, CardActions, CardContent, Paper, CardMedia, ListItem, ListItemText, ListItemSecondaryAction, ButtonGroup, Divider, List, Box, AccordionSummary, Accordion, AccordionDetails, IconButton } from '@material-ui/core';
import { useSelector, connect } from 'react-redux';

import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        display: "flex",
        // width: "100%",
        justifyContent: "center",
        "& .card": {
            minWidth: "200px",
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

        },
        "& .MuiIconButton-root": {
            padding: "2px",
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
        },
        "& .totalCost": {
            textAlign: "right",
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

    trashCan: {
        padding: "2px",
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

const Cart2 = ({ cartData, handleCartRemove, handleCartAdd, totalCost, handleCartFullRemove }) => {
    const classes = useStyles();
    // const cartData = useSelector((state) => state.restaurant.cart);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <Fragment>
            <div className={classes.mainDiv}>
                <Card className="card">
                    <Typography className="listTitle" component="h2">Cart</Typography>
                    <Divider orientation="horizontal" />
                    <List>
                        {cartData.length > 0 ? cartData
                                .map((item, index) => {
                                    return (
                                        <ListItem key={index} dense>
                                            <ListItemText primary={item.label} secondary={
                                                <Fragment>
                                                    ${numberWithCommas(item.cost)}
                                                </Fragment>
                                            } />
                                            <ListItemSecondaryAction style={{ top: "65%" }}>
                                                <ButtonGroup className={classes.cartButtonGroup} variant="text">
                                                    <Button onClick={() => handleCartRemove(item.label, item.name, item.cost / item.count)}>-</Button>
                                                    <Button><strong>{item.count}</strong></Button>
                                                    <Button onClick={() => handleCartAdd(item.label, item.name, item.cost / item.count)}>+</Button>
                                                </ButtonGroup>
                                                <IconButton onClick={() => handleCartFullRemove(item.name)}>
                                                    <DeleteIcon className="trashCan"/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                })
                                :
                                <Fragment>
                                    <Typography style={{ textAlign: "center" }}>Empty!</Typography>
                                </Fragment>
                        }
                    </List>
                    <div style={{ textAlign: "center" }}>
                        {/* <TextField className="input" size="medium" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/> */}
                        <Typography className="totalCost" variant="body1"><strong>Total: ${numberWithCommas(totalCost)}</strong></Typography>
                        <Button className="submitButton" variant="contained" color="primary" onClick={() => placeOrder()}>Submit Order</Button>
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}

export default Cart2;