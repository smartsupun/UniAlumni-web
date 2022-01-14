import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getPosts } from '../../actions/Posts';
import Posts from '../Posts/posts';
import Form from '../Form/Form';
import Left from '../LeftSlidebar/Leftslide';
import Right from '../Rightslidebar/Rightslide';
import Top from '../Topbar/Topbar';

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
      <Grid item xs={12} sm={7} md={12}>
            <Top setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={7} md={3}>
            <Left setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}md={3}>
            <Right currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
