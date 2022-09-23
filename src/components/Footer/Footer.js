import React, { useState, useEffect } from 'react';
import { Stack, Typography, Box, useTheme, Button, Icon, useMediaQuery, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Footer = () => {
    const theme = useTheme();
    const [darkMode, setDarkMode] = useState(theme.palette.type == 'dark' ? true : false);

    const switchMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <>
        <Box>
            <IconButton color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
        </>
    )
}

export default Footer;