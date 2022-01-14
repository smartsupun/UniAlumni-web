import React from 'react';
import useStyles from './style';
import {Typography, Paper } from '@material-ui/core';

const Rightslide = () => {
  const classes = useStyles();

    return (
        <Paper className={classes.right}>
        <Typography variant="h6" align="center">
          right side comes here
        </Typography>
      </Paper>
    )
}

export default Rightslide
