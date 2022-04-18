import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Event from './Event/event';
import useStyles from './style';

const Events = ({ setCurrentId, groupid }) => {
  const events = useSelector((state) => state.events);
  const classes = useStyles();


  console.log((events));
  return (
  
    !events.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>

        {events.filter(event => event.groupid == groupid).map(event => (
          <Grid key={event._id} item xs={12} sm={12} md={12}>
            <Event event={event} setCurrentId={setCurrentId} />
          </Grid>
        ))}

      </Grid>
    )
   
  );
};

export default Events;
