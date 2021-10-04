import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function CardItem( {key, name, model, starship_class, manufacturer, max_atmosphering_speed,   } ) {
   
    return (
    <Grid item xs={4} sm={4} key={key}>
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Model:</b> {model}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Starship class:</b> {starship_class}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Manufacturer:</b> {manufacturer}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Max atmosphering speed:</b> {max_atmosphering_speed}</Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}