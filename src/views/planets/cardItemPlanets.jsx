import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function CardItem( {key, name, diameter, orbital_period, climate, rotation_period, surface_water, terrain, gravity } ) {
    
    return (
    <Grid item xs={4} sm={4} key={key}>
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Diameter:</b> {diameter}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Orbital period:</b> {orbital_period}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Climate:</b> {climate}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Rotation period:</b> {rotation_period}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Surface water:</b> {surface_water}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Terrain:</b> {terrain}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Gravity:</b> {gravity}</Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}