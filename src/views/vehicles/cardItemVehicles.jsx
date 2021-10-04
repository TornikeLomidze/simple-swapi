import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function CardItem( {key, name, model, manufacturer, max_atmosphering_speed, passengers, vehicle_class } ) {
    
    return (
    <Grid item xs={4} sm={4} key={key}>
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Model:</b> {model}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Manufacturer:</b> {manufacturer}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Max atmosphering speed:</b> {max_atmosphering_speed}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Passengers:</b> {passengers}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Vehicle class:</b> {vehicle_class}</Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}