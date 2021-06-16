import React, { Fragment } from 'react';
import { makeStyles, Typography, Button, Card, ListItem, ListItemText, ListItemSecondaryAction, ButtonGroup, Divider, List, IconButton, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Input } from '@material-ui/core';
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
    },
}))

const Cart2 = ({ cartData, handleCartRemove, handleCartAdd, totalCost, handleCartFullRemove, placeOrder }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [customerName, setCustomerName] = React.useState("");

    const handleSubmit = () => {
        if (cartData.length > 0) {
            setOpen(true);
        }
    }

    const handleClose = (ready) => {
        if (ready == true && customerName.length > 0) {
            setOpen(false);
            setError(false);
            placeOrder(cartData, customerName);
        } else if (ready === false) {
            setOpen(false);
            setError(false);
        } else {
            setError(true);
        }
    }

    const handleCustomerName = (e) => {
        setCustomerName(e.target.value);
    }

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
                                                    <Button onClick={() => handleCartAdd(item.label, item.name, item.cost / item.count, item.recipe)}>+</Button>
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
                        <Typography className="totalCost" variant="body1"><strong>Total: ${numberWithCommas(totalCost)}</strong></Typography>
                        <Button className="submitButton" variant="contained" color="primary" onClick={() => handleSubmit()}>Submit Order</Button>
                    </div>
                </Card>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Customer Name</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter name for this order</DialogContentText>
                    <form noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
                        <Input error={error} placeholder="" inputProps={{ 'aria-label': 'description' }} onChange={(e) => handleCustomerName(e)}/>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button size="small" variant="outlined" onClick={() => handleClose(true)}>Confirm</Button>
                    <Button size="small" variant="outlined" color="secondary" onClick={() => handleClose(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default Cart2;