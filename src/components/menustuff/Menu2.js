import React, { Fragment } from 'react';
import { makeStyles, Typography, Grid, Button, Card, CardActions, CardContent, Paper, CardMedia, ListItem, ListItemText, ListItemSecondaryAction, ButtonGroup, Divider, List, Box, AccordionSummary, Accordion, AccordionDetails } from '@material-ui/core';
import { useSelector, useDispatch, connect } from 'react-redux';
import ItemImage from '../ItemImage';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import * as restActions from '../../store/restaurant/restaurant.actions';


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
            }
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
    }
}))

const Menu2 = ({handleCartAdd, handleCartBulkAdd, foodData, userData}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className={classes.mainDiv}>
                <Card className="card">
                    <Typography style={{textAlign: "center"}}>Menu</Typography>
                    <Divider style={{marginBottom: "10px"}} orientation="horizontal" />
                    <Grid container justify="space-evenly" spacing={3}>
                        {foodData ? foodData
                            .map((item,index) => {
                                return (
                                    <Grid item key={index} xs={3}>
                                        <Card className={classes.cardMain}>
                                            <CardContent className="cardContent">
                                                <ItemImage name={item.img}/>
                                                <Typography variant="h6" component="h2">{item.name}</Typography>
                                                <Typography color="textSecondary" component="p">${item.cost}</Typography>
                                            </CardContent>
                                            <CardActions className="cardActions">
                                                    <Accordion>
                                                        <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}>
                                                            <Typography color="textSecondary" variant="body1">Purchase Options</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Grid container justify="center" spacing={3}>
                                                            <Grid item><Button onClick={() => handleCartAdd(item.name, item.img, item.cost)}>Add To Order</Button></Grid>
                                                        {
                                                            userData.job_name === "boss"
                                                            ?
                                                            <Grid item><Button onClick={() => handleCartBulkAdd(item.name, item.img, item.cost)}>Bulk Order</Button></Grid>
                                                            :
                                                            <>{null}</>
                                                        }
                                                            </Grid>
                                                        </AccordionDetails>
                                                    </Accordion>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                            :
                            <Fragment>{null}</Fragment>
                        }
                    </Grid>
                </Card>
            </div>
        </Fragment>
    )
}

export default Menu2;