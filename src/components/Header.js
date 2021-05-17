import React, { Fragment } from 'react';
import { makeStyles, Typography, AppBar, Grid, Toolbar, Button, Box, ButtonGroup} from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import * as restActions from '../store/restaurant/restaurant.actions';
import anotherJson from '../helpers/anotherJson.json';

const useStyles = makeStyles((theme) => ({

}))

export default (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const renderHeader = () => {
        if (props.menuData) {
            return (
                <AppBar position="static" className="app-bar">
                    <Toolbar className="title-bar">
                        <Grid justify="flex-start" container>
                            <Typography variant="h6">{props.menuData.restaurant_name}</Typography>
                        </Grid>
                        <Grid item justify="center" container>
                            <ButtonGroup>
                                <Button>Menu</Button>
                                <Button>Orders</Button>
                                <Button>History</Button>
                            </ButtonGroup>
                            <Button onClick={() => dispatch(restActions.softLoadData(anotherJson))}>
                                Data
                            </Button>
                        </Grid>
                        <Grid className="wrapper" justify="flex-end" container>
                            <Box className="wrapper">
                                <Button>
                                    EXIT
                                </Button>
                            </Box>
                        </Grid>
                    </Toolbar>
                </AppBar>
            )
        }
    }

    return <Fragment>{renderHeader()}</Fragment>
}