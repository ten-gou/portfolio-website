import React from 'react';
import { Stack, Button, Box, Typography } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import { footer, link } from './styles.js';

const Footer = () => {
    return (
        <>
        <Box sx={footer} position='sticky'>
            <Stack flexDirection='row' justifyContent='space-evenly' alignItems='center' marginY='1rem'>
                <Box><Typography textAlign={'center'}><Button sx={link} href='/web-portfolio/contact'>Need to Contact?<LaunchIcon /></Button></Typography></Box>
            </Stack>
        </Box>
        </>
    )
}

export default Footer;