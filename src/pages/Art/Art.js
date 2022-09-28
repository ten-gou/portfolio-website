/* Image List quilted with title bars */
import React from "react";

import { CssBaseline, Box, Grid, Stack, Button, Typography, ImageListItem } from "@mui/material";
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
            <ImageList
            variant={'quilted'}>
            {list.map((item, index) => {
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
            </ImageListItem>
            })}
            </ImageList>
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