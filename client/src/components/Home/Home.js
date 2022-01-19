import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/Posts';


const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container >
        <Grid container justify="space-between" alignItems="stretch" spacing={3} >
          <div>
            <h1>Banner</h1> </div>
            <div><h1>Features</h1></div>
            <div><h1>recognized alumni groups</h1></div>
            <div> <h1>upcomming events</h1></div>
            <div><h1>posts</h1></div>
            
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
