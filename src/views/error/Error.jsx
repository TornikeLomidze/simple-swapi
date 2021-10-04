import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    errorContainer: {
        height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
        color: "red"
    }
  }));
  

const Error = () => {
  const classes = useStyles();
    return(
        <Grid container className={classes.errorContainer} xs={12} direction="row" justifyContent="center" alignItems="center" >
            <Typography variant="h1" component="div" className={classes.title}>Error 404... </Typography>
        </Grid>        
    );
}

export default Error;