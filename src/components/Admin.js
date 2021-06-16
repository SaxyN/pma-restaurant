import React, { Fragment } from 'react';
import { Divider, makeStyles, Typography, Card, Grid, CardContent, TextField, List, ListItem, Accordion, AccordionDetails, AccordionSummary, ListItemText, AccordionActions, Button, CardActions } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import ItemImage from './ItemImage';
import * as restActions from '../store/restaurant/restaurant.actions';
import * as apis from '../apis/apis.js';

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
            },
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
            "$ .titleText": {
                textAlign: "center",
            },
            "& .list": {
                width: "100%"
            },
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
        backgroundColor: "#ECECEC",
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
    textRoot: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
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

const Admin = ({ foodData, tempPrice, selectedItem }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleTempPrice = (e) => {
        dispatch(restActions.setTempPrice(e.target.value));
    }
    
    const handleItemSelect = (item) => {
        dispatch(restActions.setSelectedItem(item));
    }

    const handlePriceConfirm = () => {
        if (tempPrice !== "" && selectedItem !== "") {
            console.log("Changing price of "+selectedItem+" to "+tempPrice);
            // Do our API call to have the price changed in the DB

            // Clear the value of the tempPrice for no over lap to other items
            apis.setNewPrice(selectedItem,tempPrice);
            dispatch(restActions.setTempPrice(""));
            dispatch(restActions.setSelectedItem(""));

        }
    }

    if (foodData) {
        return (
            <Fragment>
                <div className={classes.mainDiv}>
                    <Card className="card">
                        <Typography style={{ textAlign: "center" }}>Admin Panel</Typography>
                        <Divider />
                        <List className="list">
                            <ListItem className={classes.listItem} dense>
                                <Accordion square className={classes.accordion}>
                                    <AccordionSummary>
                                        <ListItemText primary="Item Pricing"/>
                                        <ListItemText secondary="Insert new price, select the desired item and hit 'apply'"/>
                                    </AccordionSummary>
                                    <Divider />
                                    <AccordionDetails>
                                        <form className={classes.textRoot} noValidate autoComplete="off">
                                            <TextField
                                                id="item-price"
                                                label="Price Change"
                                                type="number"
                                                autoComplete="current-price"
                                                variant="outlined"
                                                onChange={(e)=>handleTempPrice(e)}
                                            />
                                        </form>
                                        <Divider orientation="vertical"/>
                                        <Grid container justify="space-evenly" spacing={3}>
                                            {foodData.map((item, index) => {
                                                return (
                                                    <Grid item key={index} xs={3}>
                                                        <Card className={classes.cardMain} elevation={5}>
                                                            <CardContent className="cardContent">
                                                                <ItemImage name={item.img} />
                                                                <Typography variant="h6" component="h2">{item.name}</Typography>
                                                                <Typography color="textSecondary" component="p">${numberWithCommas(item.cost)}</Typography>
                                                            </CardContent>
                                                            <Divider />
                                                            <CardActions>
                                                                { selectedItem === item.img
                                                                    ? 
                                                                    <Button size="small" variant="outlined" color="secondary" onClick={() => handleItemSelect("")}>Select</Button>
                                                                    :
                                                                    <Button size="small" variant="outlined" color="primary" onClick={() => handleItemSelect(item.img)}>Select</Button>
                                                                }
                                                            </CardActions>
                                                        </Card>
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                    </AccordionDetails>
                                    <Divider />
                                    <AccordionActions>
                                        <Button size="small" color="primary" onClick={() => handlePriceConfirm()}>Apply</Button>
                                    </AccordionActions>
                                </Accordion>
                            </ListItem>
                        </List>
                    </Card>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Typography>No DATA</Typography>
        )
    }

}

export default Admin;