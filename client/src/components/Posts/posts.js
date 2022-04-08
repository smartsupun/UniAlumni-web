import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/post';
import useStyles from './style';

const Posts = ({ setCurrentId,groupid }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  
  
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>

{/* ----------------------------------------- */}

       

{posts.filter(post => post.groupid==groupid).map(post => (
    <Grid key={post._id} item xs={12} sm={12} md={12}>
    <Post post={post} setCurrentId={setCurrentId} />
  </Grid>
  ))}



{/* ------------------------------------------------------------ */}


        {/* {posts.map((post) => {

          if(groupid=='623fa2bbf642ac7804ddfb8f'){
          return(
            <Grid key={post._id} item xs={12} sm={12} md={12}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
          )}
          else{
            return(
              
              <h1 style={{marginTop:"50px"}}>No posts Available</h1>
            
            )}
        }

        )} */}
      </Grid>
    )
  );
};

export default Posts;
