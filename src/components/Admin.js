import React, { Fragment } from 'react';
import { Divider, makeStyles, Typography, Card, Grid, CardContent } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ItemImage from './ItemImage';

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

const Admin = ({foodData}) => {
    const classes = useStyles();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (foodData) {
        return (
            <Fragment>
                <div className={classes.mainDiv}>
                    <Card className="card">
                        <Typography style={{textAlign: "center"}}>Admin Panel</Typography>
                        <Divider />
                        <Grid container justify="space-evenly" spacing={3}>
                            {foodData.map((item, index) => {
                                return (
                                    <Grid item key={index} xs={3}>
                                        <Card className={classes.cardMain}>
                                            <CardContent className="cardContent">
                                                <ItemImage name={item.img}/>
                                                <Typography variant="h6" component="h2">{item.name}</Typography>
                                                <Typography color="textSecondary" component="p">${numberWithCommas(item.cost)}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
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