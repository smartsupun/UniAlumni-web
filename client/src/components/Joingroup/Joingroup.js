import React from 'react'
import { Grid,Button , TextField } from '@material-ui/core';
import image from '../../images/slide.jpg'
import Slider from './GroupSuggestCard'
import {useLocation} from 'react-router-dom';





import Form from './Form'



const Joingroup = () => {
    const location = useLocation();
    
    return (
        <div>
            <Grid container>
                <Grid item xs={4} sm={4} >
                        <h1>form</h1>
    <h1>{location.state.alyear}</h1>
    <h1>{location.state.olyear}</h1>
    <h1>{location.state.graduateyear}</h1>
    <h1>{location.state.school}</h1>
    <h1>{location.state.university}</h1>
                        < Form />
                        
                
                      
                      
                       
          
                </Grid>

                <Grid item xs={8} sm={8} style={{backgroundImage:`url(${image})`,backgroundSize:"cover", backgroundPosition: "center",height:'100vh'}}>
                        <h1  style={{margin:'10px',color:"white"}}>Suggested Groups</h1>
                    <Grid container style={{margin:'10px'}}>
                            <Grid item xs={4} sm={4} > <Slider /> </Grid>
                            <Grid item xs={4} sm={4}> <Slider /> </Grid>
                            <Grid item xs={4} sm={4}> <Slider /> </Grid>
                            <Grid item xs={4} sm={4}> <Slider /> </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Joingroup
