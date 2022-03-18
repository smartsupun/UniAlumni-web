import * as React from 'react';
import Featurecards from './Featurecards'
import {  Grid } from '@material-ui/core';






const Features = () => {

    return (
        <Grid container spacing={4} >
            <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards color="blue" topic="Hangout With Friends" text="stay connected with friends and events"/>  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards  />  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards />  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards />  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards />  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards />  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards />  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards />  </Grid>                    
            </Grid>  

                         
        </Grid>
           
            
    )     
}

export default Features
