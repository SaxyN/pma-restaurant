import React, { Fragment, useEffect} from 'react';
import { makeStyles, Card, List, ListItem, ListItemText, AccordionSummary, Accordion, Typography, Divider, AccordionDetails, AccordionActions, Button, DialogContent } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import ItemImage from './ItemImage';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardDiv: {
        // display: "flex",
        width: "100%",
        backgroundColor: "#C0B87E",
        padding: "10px",
        "& .titleText": {
            textAlign: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
        },
        "& .list": {
            width: "100%"
        },
        "& .MuiList-root": {
            // width: "100%",
            display: "auto",
        },
        "& .MuiListItem-root": {
            display: "flex",
        },
        "& .image": {
            width: 135,
            height: 100,
            margin: "auto",
            objectFit: "contain",
        },
    },

    accordion: {
        width: "100%",
    },
    listItem: {
        paddingTop: "2px",
        paddingBottom: "2px",
    }
}))

const Order = ({cookOrder, orderData, deleteOrder}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [currentOrder, setCurrentOrder] = React.useState();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleClickOpen = (order) => {
        setOpen(true);
        setCurrentOrder(order);
    }

    const handleClose = (ready) => {
        if (ready === true) {
            setOpen(false);
            deleteOrder(currentOrder);
        } else {
            setOpen(false);
        }
    }
    
    const handleClickOpen2 = (order) => {
        setOpen2(true);
        setCurrentOrder(order);
    }

    const handleClose2 = (ready) => {
        if (ready === true) {
            setOpen2(false);
            cookOrder(currentOrder);
        } else {
            setOpen2(false);
        }
    }

    return (
        <Fragment>
            <Card className={classes.cardDiv}>
                <Typography className="titleText">Active Orders</Typography>
                <Divider orientation="horizontal"/>
                <List className="list">
                    {orderData.map((item, index) => {
                        return (
                            <ListItem className={classes.listItem} dense key={index}>
                                <Accordion square className={classes.accordion}>
                                    <AccordionSummary>
                                        <ListItemText>{item.customer}</ListItemText>
                                        <Typography>${numberWithCommas(item.cost)}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {item.items.map((item2, index2) => {
                                            return (
                                                <div key={index2}>
                                                    <ItemImage name={item2.img} className="image" />
                                                    <Typography variant="body2" color="textSecondary">{item2.label} x{item2.count}</Typography>
                                                </div>
                                            )
                                        })}
                                    </AccordionDetails>
                                    <Divider />
                                    <AccordionActions>
                                        <Button size="small" color="secondary" onClick={() => handleClickOpen(item)}>Delete</Button>
                                        <Button size="small" color="primary" onClick={() => handleClickOpen2(item)}>Cook</Button>
                                    </AccordionActions>
                                </Accordion>
                            </ListItem>
                        )
                    })}
                </List>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Delete Order Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to delete this order?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="secondary" onClick={() => handleClose(true)}>Yes</Button>
                    <Button variant="outlined" onClick={() => handleClose(false)}>No</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open2} onClose={handleClose2}>
                <DialogTitle>Cook Order Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to cook order for: {currentOrder?currentOrder.customer:null}?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="secondary" onClick={() => handleClose2(true)}>Yes</Button>
                    <Button variant="outlined" onClick={() => handleClose2(false)}>No</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default Order;