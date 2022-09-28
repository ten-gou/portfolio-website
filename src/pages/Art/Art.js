/* Image List quilted with title bars */
import * as React from "react";

import { CssBaseline, Box, Grid, Stack, Button, Typography, ImageList, ImageListItem } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

const srcset = (image, size, rows = 1, cols = 1) => {
    return {}
}

const Image = () => {
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
        <Image />
        </>
    )
}

export default Art;