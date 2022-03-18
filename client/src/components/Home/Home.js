import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getPosts } from '../../actions/Posts';
import Banner from './Banner'
import Features from './Features'
import Alumnigroup from './Alumnigroup'


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
          <div style={{fontFamily:"Roboto"}}>
             <Banner  />  
             <h1 style={{textAlign:"center"}}>Features</h1>
            <Features />
             <h1 style={{textAlign:"center"}}>Alumni Groups</h1>
            <Alumnigroup />
             <h1 style={{textAlign:"center"}}>Contact Us</h1>
           
           
          </div>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
