import React from "react";
import { navbarBg, buttonStyle } from './styles.js';

import { Box, Stack, Button, AppBar, useMediaQuery, ThemeProvider, useTheme, Toolbar } from "@mui/material";

//collapsing header title component
const TitleCollapse = () => {
    const theme = useTheme();

    //checks to see if the webpage is small or not
    const match = useMediaQuery(theme.breakpoints.up('sm'));
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev)
    };

    //depending on small or not, returns full title or collapsed version
    if (match == true) {
        return <Button sx={buttonStyle} href='/'>Libin Wang's Web Portfolio</Button>
    }
    else {
        return <Button sx={buttonStyle} href='/'>Wang's Web Portfolio</Button>
    }
};

//collapsing about me component
const AboutCollapse = () => {
    const theme = useTheme();

    //checks to see if the webpage is small or not
    const match = useMediaQuery(theme.breakpoints.up('sm'));
    const [checked, setChecked] = React.useState(false);

    //depending on small or not, returns full title or collapsed version
    if (match == true) {
        return <Button sx={buttonStyle}>About Me</Button>
    }
    else {
        return <Button sx={buttonStyle}>About</Button>
    }
}

//base navbar
const Navbar = () => {
    return (
        <>
        <AppBar sx={navbarBg}>
            <Stack flexDirection='row' justifyContent='space-evenly' alignItems='center' marginY='1rem'>
                <Button sx={buttonStyle}>Code</Button>
                <Button sx={buttonStyle}>Art</Button>

                {/* plugs in the collapsing title & about me section into the navbar */}
                <ThemeProvider>
                    <TitleCollapse></TitleCollapse>
                    <AboutCollapse></AboutCollapse>
                </ThemeProvider>
                <Button sx={buttonStyle}>Contact</Button>
            </Stack>
        </AppBar>
        </>
    );
}

export default Navbar;