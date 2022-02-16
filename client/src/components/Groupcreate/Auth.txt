import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import image from '../../images/slide.jpg'
import Slider from './GroupSuggestCard'
import Form from './Form'


const Auth = () => {
  return (
    <div>


      <Grid container>
        <Grid item xs={6} sm={6} >
          <h1>Create Group</h1>
          < Form />


         





        </Grid>

        <Grid item xs={6} sm={6} style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", height: '100vh' }}>
          <h1 style={{ margin: '10px', color: "white" }}>Suggested Groups</h1>
          <Grid container style={{ margin: '10px' }}>
            <Grid item xs={4} sm={4} > <Slider /> </Grid>
            <Grid item xs={4} sm={4}> <Slider /> </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Auth
