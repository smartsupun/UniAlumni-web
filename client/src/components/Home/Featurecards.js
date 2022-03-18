import * as React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';




const Featurecards = (props) => {

    return (

        <div style={{ width: "200px",marginLeft:"50px" }}>
            <Card sx={{ minWidth: 275 }}>
                <div style={{ textAlign: "center", color:props.color }}><GroupOutlinedIcon /></div>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <h4 style={{ textAlign: "center" }} >{props.topic}</h4>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                       {props.text}
                     </Typography>
                </CardContent>

            </Card>
        </div>

    )
}

export default Featurecards
