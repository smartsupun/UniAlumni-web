import * as React from 'react';
import { Typography, Card, CardContent,CardActions,CardMedia ,Button   } from '@material-ui/core';
import background from "../../images/21310_Alumni_F.jpg";
import { Link} from 'react-router-dom';


const GeoupSuggestCard = () => {

    return (

        <div style={{ width: "200px",marginLeft:"50px"}}>
            <Card sx={{ maxWidth: 345 }} style={{  backgroundSize:"cover", backgroundPosition: "center",backgroundColor:"lightblue"}}>
      <CardMedia
        component="img"
        height="140"
        image={background}
        alt="green"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Royal College Mother OBA
        </Typography>
       
      </CardContent>
      <CardActions>
      <Button component={Link} to="/auth" variant="contained" color="primary">Join Group</Button>
      </CardActions>
    </Card>
        </div>

    )
}

export default GeoupSuggestCard
