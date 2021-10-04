
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    LoadingContainer: {
        height: "100vh"
    },
    LoadingStyle: {
        color: "#fff",
        padding: theme.spacing(2),
    }
}));

export default function Loading() {
    const classes = useStyles();
    
    return (
        <Grid container spacing={3} className={classes.LoadingContainer} direction="row" justifyContent="center" alignItems="center">
           <Typography className={classes.LoadingStyle} gutterBottom>Loading ... </Typography>     
        </Grid>
    ) 
}