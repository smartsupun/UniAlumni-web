import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createEvent, updateEvent } from '../../actions/Events';
import useStyles from './style';

//
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//

const Eventform = ({ currentId, setCurrentId ,groupid}) => {
  const [eventData, setEventData] = useState({ title: '', message: '', tags: '', selectedFile: '',groupid:groupid });
  const event = useSelector((state) => (currentId ? state.Events.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  // console.log(user)

  useEffect(() => {
    if (event) setEventData(event);
    // console.log(event)
  }, [event]);
  
  const clear = () => {
    setCurrentId(0);
    setEventData({ title: '', message: '', tags: '', selectedFile: '' });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (currentId === 0) {
      dispatch(createEvent({ ...eventData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updateEvent(currentId, { ...eventData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      
      <Paper className={classes.paper} >
        <Typography variant="h6" align="center" >
          Please Sign In to create your own events and events.
        </Typography>
      </Paper>
    );
  }

  return (
    // <Popup trigger={<button> Trigger</button>} position="right center">
    <div>
    
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${event.title}"` : 'Create a event'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={eventData.title} onChange={(e) => setEventData({ ...eventData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={eventData.message} onChange={(e) => setEventData({ ...eventData, message: e.target.value })} />
        {/* <TextField name="groupid" type=""  value={groupid} onChange={(e) => setEventData({ ...eventData, groupid: e.target.value })} /> */}
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={eventData.tags} onChange={(e) => setEventData({ ...eventData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setEventData({ ...eventData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
   
    </div>
  // </Popup>
  );
};

export default Eventform;
