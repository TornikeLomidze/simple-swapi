import { Grid } from '@material-ui/core';
import { Pagination } from '@mui/material';

export default function pagination() {
    return (
        <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12} sm={12}
        >
            <Pagination count={10} variant="outlined" color="primary" />
        </Grid>

    );
}

