import React from "react";

import { projectTitle, link } from "./styles";

import { Box, Stack, Grid, Button, Typography } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

const CodeList = () => {
    const list = [
        {
            key: 1,
            url: 'https://ten-gou.github.io/Password-Generator/',
            github: 'https://github.com/ten-gou/Password-Generator',
            title: 'Password Generator',
            desc: 'A Javascript based website that allows the user to generate passwords using parameters.',
        },
        {
            key: 2,
            url: 'N/A',
            github: 'https://github.com/ten-gou/readme-generator',
            title: 'README Generator',
            desc: 'A terminal level program which builds README files based on user inputs.',
        },
        {
            key: 3,
            url: 'https://ten-gou.github.io/Weather6-Dashboard/',
            github: 'https://github.com/ten-gou/Weather6-Dashboard',
            title: 'Weather6 Dashboard',
            desc: 'A weather tracker based on OpenWeather API which can search and log city weather data to local storage.',
        },
        {
            key: 4,
            url: 'https://web-portfolio-wang.herokuapp.com/',
            github: 'https://github.com/ten-gou/web-portfolio',
            title: 'Web Portfolio',
            desc: 'This Website! Built with React and MUI.',
        },
        {
            key: 5,
            url: 'https://quick-reviews.herokuapp.com/',
            github: 'https://github.com/ten-gou/QuickReviews',
            title: 'QuickReviews',
            desc: 'Fullstack website, using Google Books API, to search up books, rate them, and leave your own reviews. Made in collaboration with Travis Nichols, Alan Anibal, Eric Ng, and myself.',
        },
        {
            key: 6,
            url: 'https://ten-gou.github.io/careful-query/',
            github: 'https://github.com/ten-gou/careful-query',
            title: 'Careful Query - Timed Quiz',
            desc: 'A Timed Quiz, which can track scores and is automatically set to end when a certain period of time has passed. After completion, can log scores for this session.',
        },
        {
            key: 7,
            url: 'https://github.com/ten-gou/aggregate-bloodhound',
            github: 'https://github.com/ten-gou/aggregate-bloodhound',
            title: 'Budget Tracker',
            desc: 'A Mongoose based program that can function offline and as a standalone application.',
        },
        {
            key: 8,
            url: 'N/A',
            github: 'https://github.com/ten-gou/social-network-api-nosql',
            title: 'Social Network Api',
            desc: 'A social network Api that allows for the creation of users and the ability to post their thoughts into a MongoDB database.',
        },
        {
            key: 9,
            url: 'https://mad-misadventure-online.herokuapp.com/',
            github: 'https://github.com/ten-gou/mad-misadventure-online',
            title: 'Mad Misadventure Online',
            desc: 'A primarily text-based online rpg, with realtime combat across multiple players using WebSockets.',
        },
        {
            key: 10,
            url: 'https://alpha-nomonapeia-64453.herokuapp.com/',
            github: 'https://github.com/ten-gou/fictional-octo-bassoon',
            title: 'Tech Blog',
            desc: 'A tech blog, with login, timeout logout, posting, editing, and deleting capabilities via MySQL.',
        },
        {
            key: 11,
            url: 'N/A',
            github: 'https://github.com/ten-gou/E-commerce-Back-End-Program',
            title: 'E-Commerce Backend',
            desc: 'A Sequelize, SQL, and JS based database for Products, Categories, and Tags.',
        },
        {
            key: 12,
            url: 'N/A',
            github: 'https://github.com/ten-gou/employee-tracker-system',
            title: 'Employee Tracker System',
            desc: 'A MySQL and JS based database which allows you to manage departments, jobs, and employees.',
        },
        {
            key: 13,
            url: 'N/A',
            github: 'https://github.com/ten-gou/team-manager',
            title: 'Team Manager',
            desc: 'A command line program which uses inquirer to dynamically generate an html page to track your team and the members within said team.',
        },
        {
            key: 14,
            url: 'https://ten-gou.github.io/week-scheduler/',
            github: 'https://github.com/ten-gou/week-scheduler',
            title: 'Work Day Scheduler',
            desc: 'A scheduler that allows you to plan out your workday in advance. Has input allotments every hour from 0900, or 9 AM, to 1700, or 5 PM. When you click the update button, it saves the data to your local storage, allowing to reaccess the information at a later time.',
        },
    ]

    return (
        <Box>
            {list.map((item, index) => {
                return (
                        <Grid container spacing={4} marginY={4} justifyContent={'center'} key={item.key}>
                            {/*row one - name and git link*/}
                            <Grid item xs={7} sm={11} sx={projectTitle}><Typography variant="h4">{item.title}</Typography></Grid>
                            <Grid item xs={3} sm={1} alignSelf={'center'}><Button href={item.github} sx={link}>Github<LaunchIcon /></Button></Grid>

                            {/*row two - name and deploy link*/}
                            <Grid item xs={7} sm={11} textAlign='center'>{item.desc}</Grid>
                            {item.url === 'N/A' ? (
                                <>
                                <Grid item xs={3} sm={1} alignSelf={'center'}><Button disabled sx={link}>Deployed<LaunchIcon /></Button></Grid>
                                </>
                            ) : (
                                <>
                                <Grid item xs={3} sm={1} alignSelf={'center'}><Button href={item.url} sx={link}>Deployed<LaunchIcon /></Button></Grid>
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