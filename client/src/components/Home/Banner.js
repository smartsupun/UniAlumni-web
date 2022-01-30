import React from 'react';
import "./style";
import { Typography, Grid } from '@material-ui/core';
import Image from '../../images/21310_Alumni_F.jpg'


const Banner = () => {

    return (
        <div style={{ height: "100vh" }}>
            {/* <div style={{width:"700px",backgroundColor:"lightblue"}}>
                Header text come here
            </div>
            
            <div>
                image come here
            </div> */}
            <Grid container>
                <Grid item xs={6} sm={6} style={{backgroundColor:"lightblue",height:"100vh"}}>
                    <h1 style={{textAlign:"center",marginTop:"400px"}}>Header text come here</h1>

                </Grid>
                <Grid item xs={6} sm={6} >
                    <img src={Image} style={{height:"100vh",backgroundSize:"cover", backgroundPosition: "center",width:"650px"}}></img>

                </Grid>
            </Grid>

        </div>
    )
}

export default Banner
