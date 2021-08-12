import React, { Fragment } from 'react';
import { makeStyles, Card, CardContent, CardActions, Typography, List, ListItem, Divider, Grid, CardActionArea, CardMedia, ListItemSecondaryAction, IconButton, ListItemIcon, Tooltip, Fab, Modal, Fade, Input, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import ItemImage from "../components/ItemImage";

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
        maxWidth: 175,
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
    cardMain2: {
        minWidth: 175,
        maxWidth: 175,
        textAlign: 'center',
        backgroundColor: "#9AE697",
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

    cardBottom: {
        // width: "100%",
        backgroundColor: "#BDC4A1",
        padding: "10px",
        "& .addButton": {
            position: "relative",
            left: "95%"
        }
    },
}))

export default ({ handleCompanySelect, companies, currentCompany, ingredients, modalOpen, handleManifestAdd }) => {
    const classes = useStyles();

    const handleClose = () => {

    }

    const handleOpenModal = () => {

    }

    return (
        <Fragment>
            <div className={classes.mainDiv}>

                <Card className="card" elevation={5}>
                    <Typography style={{ textAlign: "center" }}>Supply Panel</Typography>
                    <Divider style={{ marginBottom: "10px" }} />
                    <Grid container justify="space-evenly" style={{ paddingBottom: "10px" }}>
                        {companies.map((item, index) => {
                            if (currentCompany && currentCompany === item.job_name) {
                                return (
                                    <Card
                                        key={index}
                                        className={classes.cardMain2}
                                        elevation={5}
                                    >
                                        <CardActionArea style={{ height: "100%" }} onClick={() => handleCompanySelect(item.job_name)}>
                                            <CardContent>
                                                <ItemImage name={item.job_name} />
                                                <Typography variant="body1">{item.name}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )
                            } else {
                                return (
                                    <Card
                                        key={index}
                                        className={classes.cardMain}
                                        elevation={5}
                                    >
                                        <CardActionArea style={{ height: "100%" }} onClick={() => handleCompanySelect(item.job_name)}>
                                            <CardContent>
                                                <ItemImage name={item.job_name} />
                                                <Typography variant="body1">{item.name}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )
                            }
                        })}
                    </Grid>
                    <Card className={classes.cardBottom}>
                        <Modal
                            open={modalOpen}
                            onClose={handleClose}
                        >
                            <form>
                                <Input className={classes.input} placeholder="First Name" />
                                <Input className={classes.input} placeholder="Last Name" />
                                <TextField
                                    id="date"
                                    type="date"
                                    defaultValue="2000-05-24"
                                    // className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    className={classes.input}
                                />
                                <Input className={classes.input} placeholder="SSN" />
                            </form>
                        </Modal>
                        <div className="addButton">
                            <Tooltip title="Add" aria-label="add" onClick={() => handleOpenModal()}>
                                <Fab color="primary">
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                        </div>
                    </Card>

                </Card>
            </div>
        </Fragment>
    )
}