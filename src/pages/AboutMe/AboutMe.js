import { Divider, Button, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";

import CreateIcon from '@mui/icons-material/Create';
import MicIcon from '@mui/icons-material/Mic';
import CodeIcon from '@mui/icons-material/Code';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import { link } from './styles';

const AboutMe = () => {
    const theme = useTheme();

    return (
        <>
        <Grid container spacing={4} margin={4} justifyContent={'center'}>
            <Grid item xs={12}>
                <Typography variant={'h2'} textAlign={'center'}>About Me</Typography>
            </Grid>

            <Grid container xs={12} sm={6} justifyContent={'center'}>
                <Grid item xs={12} color={theme.palette.secondary.main}><Typography variant={'h4'} textAlign={'center'}>Who I Am</Typography></Grid>
                <Grid item xs={12}><Typography textAlign={'center'} marginX={20}>
                
                Someone who enjoys the fine things in life. <br />

                </Typography></Grid>
                <Grid item xs={12}><Typography textAlign={'center'}><Button sx={link} href='/contact'>Need to Contact?</Button></Typography></Grid>
            </Grid>

            <Grid container xs={12} sm={6}>
                <Grid item xs={12} color={theme.palette.secondary.main}><Typography variant={'h4'} textAlign={'center'}>My Interests</Typography></Grid>
                <Grid xs={4} />
                <Grid item xs={4} color={theme.palette.secondary.main}><List>
                    <ListItem>
                        <ListItemIcon><CreateIcon /></ListItemIcon>
                        <ListItemText>Drawing</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><MicIcon /></ListItemIcon>
                        <ListItemText>Singing</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CodeIcon /></ListItemIcon>
                        <ListItemText>Coding</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><PoolIcon /></ListItemIcon>
                         <ListItemText>Swimming</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
                        <ListItemText>Working Out</ListItemText>
                    </ListItem>
                </List></Grid>
                <Grid xs={4} />
            </Grid>
            
        </Grid>
            
        
        </>
    )
}

export default AboutMe;