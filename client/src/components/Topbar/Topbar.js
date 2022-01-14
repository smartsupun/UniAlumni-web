import React from 'react'
import useStyles from './style';
import {Typography, Paper } from '@material-ui/core';


const Topbar = () => {
  const classes = useStyles();

    return (
        <Paper className={classes.top}>
        <Typography variant="h6" align="center">
         Topbar
        </Typography>
      </Paper>
    )
}

export default Topbar
