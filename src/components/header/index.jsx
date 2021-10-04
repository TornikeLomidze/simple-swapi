import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import "./style.scss";

export default function header() {
  return (
  <Grid 
    container 
    rowSpacing={1} 
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    className="header"
  >
    <Grid item >
      <NavLink exact to='/' className='nav_item'>Films</NavLink>
      <NavLink to='/people' className='nav_item'>People</NavLink>
      <NavLink to='/starships' className='nav_item'>Starships</NavLink>
      <NavLink to='/vehicles' className='nav_item'>Vehicles</NavLink>
      <NavLink to='/species' className='nav_item'>Species</NavLink>
      <NavLink to='/planets' className='nav_item'>Planets</NavLink>
    </Grid>
  </Grid>
  );
}