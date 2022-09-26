/* Image List quilted with title bars */
import React from "react";

import { CssBaseline, Box, Grid, Stack, Button, Typography } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

const ImageList = () => {
    const list = [
        {

        },
        {

        },
        {

        },
    ]

    return (
        <Box>
            {list.map((item, index) => {
                return (
                    <>
                    </>
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