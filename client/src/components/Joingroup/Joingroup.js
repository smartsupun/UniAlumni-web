import React from 'react'
import { Grid,Box , TextField } from '@material-ui/core';
import image from '../../images/slide.jpg'
import Slider from './GeoupSuggestCard'
import SchoolSearchBar from './SchoolSearchBar'
import UniSearchBar from './UniSearchBar'


const Joingroup = () => {
    
    return (
        <div>
            <Grid container>
                <Grid item xs={5} sm={5} >
                        <h1>form</h1>
                        <SchoolSearchBar /> <br></br>
                        <UniSearchBar />
                      
                        
                </Grid>

                <Grid item xs={7} sm={7} style={{backgroundImage:`url(${image})`,backgroundSize:"cover", backgroundPosition: "center",height:'100vh'}}>
                    <Grid container style={{margin:'10px'}}>
                            <Grid item xs={4} > <Slider /> </Grid>
                            <Grid item xs={4} > <Slider /> </Grid>
                            <Grid item xs={4} > <Slider /> </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Joingroup
