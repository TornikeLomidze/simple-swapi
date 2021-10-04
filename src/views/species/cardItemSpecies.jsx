import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function CardItem( {key, name, classification, designation, language, eye_colors, hair_colors, skin_colors, average_height, average_lifespan } ) {
   
    return (
    <Grid item xs={4} sm={4} key={key}>
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Classification:</b> {classification}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Designation:</b> {designation}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Language:</b> {language}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Eye colors:</b> {eye_colors}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Hair colors:</b> {hair_colors}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Skin colors:</b> {skin_colors}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Average height:</b> {average_height}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Average lifespan:</b> {average_lifespan}</Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}