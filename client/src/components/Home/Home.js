import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getPosts } from '../../actions/Posts';
import Banner from './Banner'
import Features from './Features'
import Alumnigroup from './Alumnigroup'
import Contact from './Contact'


const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
             <Banner  />  
      <Grow in>

      <Container >
        <Grid container justify="space-between" alignItems="stretch" spacing={3} >
          <div style={{fontFamily:"Roboto"}}>
             <h1 style={{textAlign:"center"}} id="sec">Features</h1>
            <Features />
             <h1 style={{textAlign:"center"}}>Alumni Groups</h1>
            <Alumnigroup />
             <h1 style={{textAlign:"center"}}>Contact Us</h1>
            <Contact />
           
           
          </div>
        </Grid>
      </Container>
    </Grow>
      </div>
  );
};

export default Home;
