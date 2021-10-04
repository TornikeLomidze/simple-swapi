import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Grid, TextField } from '@material-ui/core';
import Pagination from '../components/pagination';
import Loading from '../components/loading';


const GenericPage = ({url, CardItem}) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}${url}`)
            .then((result) => {
                setData(result.data.results);
            })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
    }, []);

    const search = (e) => {
        axios.get(`${process.env.REACT_APP_API}${url}/?search=${e.target.value}`)
        .then((result) => {
            setData(result.data.results);
        })
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }

    return (
        <Container classes={{ root: "App" }}>
            
            <Grid container rowSpacing={1} direction="row" justifyContent="flex-start" alignItems="center" className="search" >
                <TextField onChange={(e) => search(e)} id="outlined-basic" variant="outlined" className="search_bar" placeholder="search" />
            </Grid>

            <Grid container spacing={3} direction="row" justifyContent="space-between" alignItems="flex-start" classes={{ root: "grid_container" }} >
                {!isLoading && data ? data && data.map((item, index ) =>
                    <CardItem
                        key={index}
                        {...item}
                    />
                ) : <Loading />
                }
            </Grid>

            <Pagination/>

        </Container>
    );
};


export default GenericPage;