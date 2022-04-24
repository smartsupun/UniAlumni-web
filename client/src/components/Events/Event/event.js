import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import StarIcon from '@material-ui/icons/Star';import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarOutlineIcon from '@material-ui/icons/StarOutline';import { useDispatch } from 'react-redux';
import moment from 'moment';

import { likeEvent, deleteEvent } from '../../../actions/Events';
import useStyles from './style';


const Event = ({ event, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (event.likes.length > 0) {
      return event.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><StarIcon fontSize="small" />&nbsp;{event.likes.length > 2 ? `You and ${event.likes.length - 1} others` : `${event.likes.length} Interested${event.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><StarOutlineIcon fontSize="small" />&nbsp;{event.likes.length} {event.likes.length === 1 ? 'Interest' : 'Interested'}</>
        );
    }

    return <><StarOutlineIcon fontSize="small" />&nbsp;Like</>;
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={event.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={event.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{event.name}</Typography>
        <Typography variant="body2">{moment(event.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === event?.creator || user?.result?._id === event?.creator) && (
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(event._id)} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{event.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{event.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likeEvent(event._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === event?.creator || user?.result?._id === event?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deleteEvent(event._id))          
        }>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Event;
