import { Box, Grid, Typography, Stack, useTheme, List, ListItem, ListItemText, ListItemIcon, Button, useMediaQuery } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import { link } from './styles';

const Contact = () => {
    const theme = useTheme();

    const match = useMediaQuery(theme.breakpoints.up('sm'));

    const Link = () => {
    if (match == false) {
        return  <>
        <Stack>
            <Button sx={link}>Github<LaunchIcon /></Button>
            <Button sx={link}>Github<LaunchIcon /></Button>
            <Button sx={link}>Github<LaunchIcon /></Button>
        </Stack>
        </>
    }
    else {
        return <>
        <Stack flexDirection={'row'}>
        <Button sx={link}>Github<LaunchIcon /></Button>
        <Button sx={link}>Github<LaunchIcon /></Button>
        <Button sx={link}>Github<LaunchIcon /></Button>
        </Stack>
        </>
    }
    }

    return (
        <Box marginTop={40}>
            <Grid container>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Stack>
                        <Typography variant={'h2'} textAlign={'center'}>Contact</Typography>
                        <Typography variant={'p'} textAlign={'center'}>Need to get in touch? Use the points of contact listed below:</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={3} />
            </Grid>

            <Grid container>
                <Grid item xs={3} sm={5} />
                <Grid item xs={6} sm={3}>
                    <Link />
                </Grid>
                <Grid item xs={3} sm={4}/>
            </Grid>
            
        </Box>
    )
}

export default Contact;