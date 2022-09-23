import * as React from 'react';
import { Stack, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    return (
        <>
        <Box component={'div'}>
        <Stack flexDirection={'column'}>
            <Typography>{`${theme.palette.mode}`}</Typography>

        </Stack>
        </Box>
        </>
    )
}

export default Footer;