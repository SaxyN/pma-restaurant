import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import "./CustomCard.css";


const useStyles = makeStyles((theme) => ({

}))

export default () => {
    const classes = useStyles();
    return (
        <div class="card">
            <div class="card-content">
                <h2 class="card-title">Hacking Laptop</h2>
                <p class="card-body">Encrypted laptop capable of hacking the most secure of systems</p>
                <a href="#" class="button">Click Here</a>
            </div>
        </div>
    )
}