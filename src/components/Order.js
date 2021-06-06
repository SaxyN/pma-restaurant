import React, { Fragment, useEffect} from 'react';
import { makeStyles, Card, List, ListItem, ListItemText, AccordionSummary, Accordion, Typography, Divider, AccordionDetails, AccordionActions, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import ItemImage from './ItemImage';

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

const Order = ({cookOrder, orderData}) => {
    const classes = useStyles();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                                                    <Typography variant="body2" color="textSecondary">{item2.name} x{item2.count}</Typography>
                                                </div>
                                            )
                                        })}
                                    </AccordionDetails>
                                    <Divider />
                                    <AccordionActions>
                                        <Button size="small" color="primary" onClick={() => cookOrder()}>Cook</Button>
                                    </AccordionActions>
                                </Accordion>
                            </ListItem>
                        )
                    })}
                </List>
            </Card>
        </Fragment>
    )
}

export default Order;