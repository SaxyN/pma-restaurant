import React from 'react';
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({

}))

const withOrder = (WrappedComponent) => {
    const classes = useStyles();

    const renderOrder = () => {

    }
    return (
        <WrappedComponent
            renderOrder={renderOrder}
            {...props}
        />
    )
}

export default withOrder;