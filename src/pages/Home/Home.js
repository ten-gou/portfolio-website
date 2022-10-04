import React from "react";
import { CssBaseline, Box, Grid, Stack, Button, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

const Home = () => {
    const theme = useTheme();

    return (
        <Grid container flexDirection='column' justifyContent='center' alignItems='center' spacing={2}>
            <Grid item xs={12}>
                <Box component='img' src="" /> {/*splash screen image*/}
            </Grid>

            <Grid item xs={12}>
                <Typography component='h1' variant="h2" textAlign='center'>Libin Wang's Web Portfolio</Typography>
            </Grid>

            <Grid item xs></Grid>
            <Grid item xs={6}>
                <Typography textAlign='center'>Hello! This is my web portfolio, that I built from scratch using React and MUI. This portfolio is a Progressive Web Application, meaning that the pages are built from different component elements assembled together rather than pure HTML or CSS files. Check out the navigation bar for some of the things I've made!</Typography>
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    )
}

export default Home;