import React, { Fragment } from 'react';
import { makeStyles, Typography, Card, CardContent, CardActions, Button, Grid, Divider, TextField, MenuItem } from '@material-ui/core';
import { useSelector } from 'react-redux';

import ItemImage from './ItemImage';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "center",
    },
    mainDiv: {
        padding: "10px"
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
    altText: {
        marginLeft: '30px',
    }
}))

const CompanyView = ({ currentCompany }) => {
    const classes = useStyles();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (currentCompany) {
        DoShit()
        const items = currentCompany.item_cost
        return (
            <div className={classes.mainDiv}>                
                <Grid container justify="center" spacing={3}>
                    {
                        items.map((item, index) => {
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
                                            <Button size="small" variant="outlined">Order</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>

            </div>
        )
    } else {
        return (
            <div className={classes.altText}> 
                <Typography>Select a Supply Company</Typography>
            </div>
        )
    }

}

export default CompanyView;