import * as React from 'react';
import { Typography, Card, CardContent,CardActions,CardMedia ,Button   } from '@material-ui/core';
import background from "../../images/21310_Alumni_F.jpg";

const Featurecards = () => {

    return (

        <div style={{ width: "200px",marginLeft:"50px"}}>
            <Card sx={{ maxWidth: 345 }} style={{  backgroundSize:"cover", backgroundPosition: "center",backgroundColor:"lightblue"}}>
      <CardMedia
        component="img"
        height="140"
        image={background}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Royal College
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus veniam aspernatur assumenda ducimus velit enim quis iste ullam, sapiente quos magni exercitationem obcaecati est, minima at fugiat consectetur illum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>

    )
}

export default Featurecards