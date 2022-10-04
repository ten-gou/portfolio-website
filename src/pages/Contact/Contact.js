import { Box, Grid, Typography, Stack, useTheme, List, ListItem, ListItemText, ListItemIcon, Button, useMediaQuery } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import { link } from './styles';

const Contact = () => {
    const theme = useTheme();

    const Link = () => {
        return  <>
        <Stack>
            <Button sx={link} href='mailto: lwang79@zoho.com'>Email<LaunchIcon /></Button>
            <Button sx={link} href='https://github.com/ten-gou'>Github</Button>
            <Button sx={link} href='https://www.linkedin.com/in/libin-wang-4265a2121/'>Linkedin<LaunchIcon /></Button>
            <Button sx={link} href='https://www.pixiv.net/en/users/28199511'>Pixiv<LaunchIcon /></Button>
        </Stack>
        </>
    }

    return (
        <Grid container marginTop={40} justifyContent={'center'} rowGap={8}>
            <Grid display={'flex'} flexDirection={'column'}>
                <Typography variant={'h2'} textAlign={'center'}>Contact</Typography>
                <Typography variant={'p'} textAlign={'center'} marginX={20}>Need to get in touch? Use the points of contact listed below:</Typography>
            </Grid>

            <Grid container display={'flex'}>
                <Grid item xs={3} sm={4} />
                <Grid item xs={6} sm={4}>
                    <Link />
                </Grid>
                <Grid item xs={3} sm={4}/>
            </Grid>
            
        </Grid>
    )
}

export default Contact;