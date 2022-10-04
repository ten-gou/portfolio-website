import React from "react";
import { navbarBg, buttonStyle } from './styles.js';

import { Stack, Button, AppBar, useMediaQuery, useTheme } from "@mui/material";

//collapsing header title component
const TitleCollapse = () => {
    const theme = useTheme();

    //checks to see if the webpage is small or not
    const match = useMediaQuery(theme.breakpoints.up('sm'));

    //depending on small or not, returns full title or collapsed version
    if (match === true) {
        return <Button sx={buttonStyle} href='/web-portfolio'>Libin Wang's Web Portfolio</Button>
    }
    else {
        return <Button sx={buttonStyle} href='/web-portfolio'>Wang's Web Portfolio</Button>
    }
};

//collapsing about me component
const AboutCollapse = () => {
    const theme = useTheme();

    //checks to see if the webpage is small or not
    const match = useMediaQuery(theme.breakpoints.up('sm'));


    //depending on small or not, returns full title or collapsed version
    if (match === true) {
        return <Button sx={buttonStyle} href='/web-portfolio/aboutme'>About Me</Button>
    }
    else {
        return <Button sx={buttonStyle} href='/web-portfolio/aboutme'>About</Button>
    }
}

//base navbar
const Navbar = () => {
    return (
        <>
        <AppBar sx={navbarBg} position='sticky'>
            <Stack flexDirection='row' justifyContent='space-evenly' alignItems='center' marginY='1rem'>
                <Button sx={buttonStyle} href='/web-portfolio/code'>Code</Button>
                <Button sx={buttonStyle} href='/web-portfolio/art'>Art</Button>
                {/* plugs in the collapsing title & about me section into the navbar */}
                <TitleCollapse></TitleCollapse>
                <AboutCollapse></AboutCollapse>
                <Button sx={buttonStyle} href='/web-portfolio/contact'>Contact</Button>
            </Stack>
        </AppBar>
        </>
    );
}

export default Navbar;