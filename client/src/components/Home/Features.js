import * as React from 'react';
import Featurecards from './Featurecards'
import {  Grid } from '@material-ui/core';






const Features = () => {

    return (
        <Grid container spacing={4} >
            <Grid item xs={4} md={4} lg={4}>
                    <Grid item><Featurecards color="red" topic="Hangout With old alumni Friends" text="stay connected with friends and events up to date"/>  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={4}>
                    <Grid item><Featurecards color="orange" topic="Create you own alumni groups" text="you can create alumni group for yor alumni friends" />  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={4}>
                    <Grid item><Featurecards color="yellow" topic="Update with new alumni status" text="all updated news are posted in the alumni group"/>  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={4}>
                    <Grid item><Featurecards color="green" topic="Make aware about current events" text="Organize and make aware friend about current event"/>  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={4}>
                    <Grid item><Featurecards color="purple" topic="Connect more than one group" text="you can join one or alumni groups to hangout with more friends "/>  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={4}>
                    <Grid item><Featurecards color="blue" topic="Chat with alumni group members" text="Have a conversations with alumni members with group chat"/>  </Grid>                    
            </Grid>  
            {/* <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards color="blue" topic="" text=""/>  </Grid>                    
            </Grid>  
            <Grid item xs={4} md={4} lg={3}>
                    <Grid item><Featurecards color="blue" topic="" text=""/>  </Grid>                    
            </Grid>   */}

                         
        </Grid>
           
            
    )     
}

export default Features
