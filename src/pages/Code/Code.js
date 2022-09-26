import React from "react";

import { Box, Stack, Grid, Button, Typography, useTheme } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

const CodeList = () => {
    const theme = useTheme();
    const list = [
        {
            url: 'https://ten-gou.github.io/Password-Generator/',
            github: 'https://github.com/ten-gou/Password-Generator',
            title: 'Password Generator',
            desc: 'A Javascript based website that allows the user to generate passwords using parameters.',
        },
        {
            url: 'N/A',
            github: 'https://github.com/ten-gou/readme-generator',
            title: 'README Generator',
            desc: 'A terminal level program which builds README files based on user inputs.',
        },
        {
            url: 'https://ten-gou.github.io/Weather6-Dashboard/',
            github: 'https://github.com/ten-gou/Weather6-Dashboard',
            title: 'Weather6 Dashboard',
            desc: 'A weather tracker based on OpenWeather API which can search and log city weather data to local storage.',
        },
        {
            url: 'N/A',
            github: 'https://github.com/ten-gou/web-portfolio',
            title: 'Web Portfolio',
            desc: 'This Website! Built with React and MUI.',
        }
    ]

    return (
        <Box>
            {list.map((item, index) => {
                return (
                        <Grid container spacing={4} margin={4}>
                            {/*row one - name and git link*/}
                            <Grid item xs={7} sm={9} textAlign='center'><Typography variant="h4">{item.title}</Typography></Grid>
                            <Grid item xs={3} sm={3} alignSelf={'center'}><Button href={item.github}>Github<LaunchIcon /></Button></Grid>

                            {/*row two - name and deploy link*/}
                            <Grid item xs={7} sm={9} textAlign='center'>{item.desc}</Grid>
                            {item.url == 'N/A' ? (
                                <>
                                <Grid item xs={3} sm={3} alignSelf={'center'}><Button disabled>Deployed<LaunchIcon /></Button></Grid>
                                </>
                            ) : (
                                <>
                                <Grid item xs={3} sm={3} alignSelf={'center'}><Button href={item.url}>Deployed<LaunchIcon /></Button></Grid>
                                </>
                            )}
                            
                        </Grid>
                )
            })}
        </Box>
    )
}

const Code = () => {
    return (
        <>
        <Stack>
            <Typography variant='h2' textAlign={'center'} margin={2}>Coding Projects</Typography>
            <Typography variant="p" textAlign={'center'} margin={2} paddingX={'4'}>These are coding projects which I have done. Most of these programs and websites are made in different methods to showcase different techniques and abilities.</Typography>
        </Stack>
        
        <CodeList/>
        </>
    )
}

export default Code;