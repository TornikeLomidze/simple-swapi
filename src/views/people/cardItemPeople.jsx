import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Box, Typography, Modal, Skeleton } from '@mui/material';
import axios from "axios";

const useStyles = makeStyles(theme => ({
  modalPosition: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    position: "fixed",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 8,
    padding: theme.spacing(2),
    outline: "none",
    transition: .8
  }
}));


export default function CardItem({ key, name, birth_year, gender, height, mass, hair_color, skin_color, films, vehicles, starships }) {

  const [open, setOpen] = useState(false);
  const [filmeData, setFilmeData] = useState();
  const [vehiclesData, setVehiclesData] = useState();
  const [starshipsData, setStarshipsData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = async (index) => {
    setOpen(true);
    
    const fn = async (items) => Promise.all(
      items.map(
        (item) => axios.get(item)
        )
      ).then((result) => 
        result.map(
          ({data}) => <span><a href={data.url}>{data.title ? data.title : data.name }</a>, </span>
        )
    )
  
    setFilmeData(await fn(films));
    setVehiclesData(await fn(vehicles));
    setStarshipsData(await fn(starships));
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CustomModal = () => {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        className={classes.modalPosition}
      >
        {!isLoading && filmeData && vehiclesData && starshipsData ?
        <Box sx={{ pr: 2 }} className={classes.paper}>
          <Typography variant="h6" component="div">{name}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Born:</b> {birth_year}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Gender:</b> {gender}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Height / Mass:</b> {height} / {mass}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Hair:</b> {hair_color}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Skin:</b> {skin_color}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Filme:</b> {filmeData}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Vehicles:</b> {vehiclesData}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Starships:</b> {starshipsData}
          </Typography>
         
        </Box>
        :
        <Box sx={{ pr: 2 }} className={classes.paper}>
            <Skeleton animation="wave" />
            <Skeleton width="60%" animation="wave" />
        </Box>
        }
      </Modal>)
  };

  const classes = useStyles();

  return (
    <Grid item xs={4} sm={4} key={key}>
      <Card onClick={() => { handleOpen(key) }}>
        <CardContent>
          <Typography variant="h6" component="div">{name}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Born:</b> {birth_year}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Gender:</b> {gender}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Height / Mass:</b> {height} / {mass}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Hair:</b> {hair_color}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><b>Skin:</b> {skin_color}</Typography>
        </CardContent>
      </Card>

      <CustomModal />
    </Grid>
  );
}
