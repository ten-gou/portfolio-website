/* Image List quilted with title bars */
import React from "react";

import { CssBaseline, Box, Grid, Stack, Button, Typography } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

const ImageList = () => {
    const list = [
        {
            url: 'https://ten-gou.github.io/Password-Generator/',
            github: 'https://github.com/ten-gou/Password-Generator',
            title: 'Password Generator',
            desc: 'A Javascript based website that allows the user to generate passwords using parameters',
        },
        {
            url: 'https://github.com/ten-gou/readme-generator',
            github: 'https://github.com/ten-gou/readme-generator',
            title: 'README Generator',
            desc: 'A terminal level program which builds README files based on user inputs',
        },
        {
            url: 'https://ten-gou.github.io/Weather6-Dashboard/',
            github: 'https://github.com/ten-gou/Weather6-Dashboard',
            title: 'Weather6 Dashboard',
            desc: 'A weather tracker based on OpenWeather API which can search and log city weather data to local storage',
        },
        {
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            github: 'https://github.com/ten-gou/web-portfolio',
            title: 'Web Portfolio',
            desc: 'This Website! Built with React and MUI.',
        }
    ]

    return (
        <Box>
            {list.map((item, index) => {
                return (
                        <Grid container spacing={2}>
                            {/*row one - name and git link*/}
                            <Grid item xs={9}>{item.title}</Grid>
                            <Grid item xs={3}><Button href={item.github}>Github<LaunchIcon /></Button></Grid>

                            {/*row two - name and deploy link*/}
                            <Grid item xs={9}>{item.desc}</Grid>
                            <Grid item xs={3}><Button href={item.url}>Deployed<LaunchIcon /></Button></Grid>
                        </Grid>
                )
            })}
        </Box>
    )
}

const Art = () => {

    return (
        <>
        <ImageList/>
        </>
    )
}

export default Art;