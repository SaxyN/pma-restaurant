import React, { Fragment, useEffect } from 'react';
import { makeStyles, Typography, Grid, Button, Card, CardActions, CardContent, Paper, CardMedia, ListItem, ListItemText, ListItemSecondaryAction, ButtonGroup, Divider, List } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import withMainMenu from '../hoc/withMainMenu';

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

const Cart = ({handleCartRemove, handleCartUpdate, placeOrder, cart}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [customerName, setCustomerName] = React.useState("");
    const [cartHolder, setCartHolder] = React.useState([]);
    // const cart = useSelector((state) => state.restaurant.cart);

    const renderCart = () => {
        console.log("BOOM")
        if (cart.length > 0) {
            setCartHolder(cart)
            // console.log(cart);
            return cart
            .sort((a,b) => b.cost - a.cost)
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
                                <Button onClick={() => handleCartRemove(item.label, item.name, item.cost)}>-</Button>
                                <Button><strong>{item.count}</strong></Button>
                                <Button onClick={() => handleCartUpdate(item.label, item.name, item.cost)}>+</Button>
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
                    <Typography className="listTitle" component="h2">Cart</Typography>
                    <Divider orientation="horizontal" />
                    <List>
                        {renderCart()}
                    </List>
                    <div style={{ textAlign: "center" }}>
                        {/* <TextField className="input" size="medium" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/> */}

                        <Button className="submitButton" variant="contained" color="primary" onClick={() => placeOrder()}>Submit Order</Button>
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}

export default Cart;