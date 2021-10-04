import React from "react";
import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function CardItem({ url, title, opening_crawl, director, producer, release_date }) {
    
    return (
        <Grid item xs={4} sm={4} key={url}>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="div">{title}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Description:</b> {opening_crawl}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Director:</b> {director}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Producer:</b> {producer}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>date:</b> {release_date}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}