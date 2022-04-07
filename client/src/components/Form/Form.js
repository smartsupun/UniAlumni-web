import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/Posts';
import useStyles from './style';

//
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//

const Form = ({ currentId, setCurrentId ,groupid}) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '',groupid:groupid });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  // console.log(user)

  useEffect(() => {
    if (post) setPostData(post);
    // console.log(post)
  }, [post]);
  
  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      
      <Paper className={classes.paper} >
        <Typography variant="h6" align="center" >
          Please Sign In to create your own posts and events.
        </Typography>
      </Paper>
    );
  }

  return (
    // <Popup trigger={<button> Trigger</button>} position="right center">
    <div>
    
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Create a post'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        {/* <TextField name="groupid" type=""  value={groupid} onChange={(e) => setPostData({ ...postData, groupid: e.target.value })} /> */}
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
   
    </div>
  // </Popup>
  );
};

export default Form;
