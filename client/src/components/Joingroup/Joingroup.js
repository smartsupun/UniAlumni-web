import React from 'react'
import { Grid,Button , TextField } from '@material-ui/core';
import image from '../../images/slide.jpg'
import Slider from './GroupSuggestCard'
import Form from './Form'



const Joingroup = () => {
    
    return (
        <div>
            <Grid container>
                <Grid item xs={4} sm={4} >
                        <h1>form</h1>
                        < Form />
                        
                </Grid>

                <Grid item xs={8} sm={8} style={{backgroundImage:`url(${image})`,backgroundSize:"cover", backgroundPosition: "center",height:'100vh'}}>
                        <h1  style={{margin:'10px',color:"white"}}>Suggested Groups</h1>
                    <Grid container style={{margin:'10px'}}>
                            <Grid item xs={3} sm={3} > <Slider /> </Grid>
                            <Grid item xs={3} sm={3}> <Slider /> </Grid>
                            <Grid item xs={3} sm={3}> <Slider /> </Grid>
                            <Grid item xs={3} sm={3}> <Slider /> </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Joingroup
