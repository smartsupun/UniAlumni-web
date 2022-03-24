import React from 'react';
import "./style.css"
import { Typography, Grid, Button } from '@material-ui/core';


import { Link } from 'react-router-dom';



const Banner = () => {

    return (
        <section class="hero">
            <div class="hero-inner">
                <h1 style={{ fontFamily: "Roboto" }}>Alone we can do so little; <br />together we can do so much! </h1>
                <h4 style={{ color: "#dfe2e8", fontFamily: "arial" }}>In the end, it's about the teaching, and what I always loved about coaching <br />was the practices. Not the games, not the tournaments, not the alumni stuff.<br /> But teaching the players during practice was what coaching was all about to me.</h4>

               <br/>
               <br/>
               <br/>
                <Button variant="contained" color="primary" class="button" component={Link} to="/joingroup"><span>Find Your Group </span></Button>

            </div>
        </section>
        // <Grid container style={{ height: "100vh",position:"relative",top:"-1%" }}>
        //         <img src={Image} style={{height:"100vh", bac}}></img>
        //     <Grid item xs={6} sm={6} md={6} style={{position:"relative",top:"20%"}} >
        //         <h1 style={{fontFamily:"Roboto"}}>Alone we can do <br/> so little; <br/>together we can do <br/>so much! </h1>
        //         <h4 style={{color:"gray",fontFamily:"serif"}}>In the end, it's about the teaching, and what I always loved about coaching was the practices. Not the games, not the tournaments, not the alumni stuff. But teaching the players during practice was what coaching was all about to me.</h4>
        //         <br/><br/><br/> <Button variant="contained" color="primary"  component={Link} to="/joingroup">Find Your Group</Button>
        //     </Grid>
        //     <Grid item xs={6} sm={6} md={6}>

        //     </Grid>
        // </Grid>

    )
}

export default Banner
