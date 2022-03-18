import React from 'react';
import "./style";
import { Typography, Grid,Button } from '@material-ui/core';
import Image from '../../images/3959507.jpg'
import zIndex from '@material-ui/core/styles/zIndex';
import { Link } from 'react-router-dom';



const Banner = () => {

    return (
       
            <Grid container style={{ height: "100vh",position:"relative",top:"-1%" }}>
                <Grid item xs={6} sm={6} md={6} style={{position:"relative",top:"20%"}} >
                    <h1 style={{fontFamily:"Roboto"}}>Alone we can do so little; <br/>together we can do so much </h1>
                    <h4 style={{color:"gray",fontFamily:"Arial"}}>In the end, it's about the teaching, and what I always loved about coaching was the practices. Not the games, not the tournaments, not the alumni stuff. But teaching the players during practice was what coaching was all about to me.</h4>
                <Button variant="contained" color="primary"  component={Link} to="/joingroup">Find Your Group</Button>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <img src={Image} style={{height:"100vh",width:"650px"}}></img>

                </Grid>
            </Grid>

    )
}

export default Banner
