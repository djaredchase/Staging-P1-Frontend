import React, { useState, useEffect } from 'react';
import { User } from '../models/user';
import * as userRemote from '../remotes/user.remote';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, IconButton, Toolbar, Button, Drawer, Paper, Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector, RootStateOrAny } from 'react-redux';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#1F1F1F',
        height: '100vh',
        paddingTop: '65px'
    },
    accordion: {
        width: '65vw',
        marginTop: '15px',
        marginBottom: '15px',
        marginLeft: '10px',
        backgroundColor: '#66686E'
    },
    icon: {
        height: '60px',
        width: '60px'
    },
    banner: {
        position: 'relative',
        height: '200px',
        backgroundColor: 'gray'
    },
    bannerText: {
        position: 'absolute',
        top: '30%',
        textAlign: 'center'
    },
    smallNav: {
        position: 'sticky',
        top: '65px',
        height: '50px'
    },
    smallNavText: {
        position: 'absolute',
        top: '1%',
        left: '1%',
        color: 'white'
    },
    smallNavButton: {
        position: 'absolute',
        top: '10%',
        right: '1%',
        backgroundColor: 'green'
    },
    drawer: {
        backgroundColor: 'green',
        width: '200px',
        marginTop: '64px'
    },
    cardMedia: {
        height: '250px',
        width: '75%',
        backgroundColor: 'blue'
    },
    boxRoot: {
        backgroundColor: '#1F1F1F'
    }
});

export const TrainerComponent: React.FC = () => {
    const classes = useStyles();
    const [trainers, setTrainers] = useState<User[]>([]);
    const [open, setOpen] = useState(false);
    const user = useSelector((state: RootStateOrAny) => state.user);

    const handleDrawerOpen = () => {
        setOpen(!open);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        const loadUsers = async () => {
            let userArray;
            try {
                userArray = await userRemote.getAllTrainers();
            }catch {
                return;
            }
            console.log(userArray);
            setTrainers(userArray);
        }
        loadUsers();
        console.log(user);
    }, []);


    return(
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography className={classes.bannerText} variant='h4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>
            <div className={classes.smallNav}>
                <Typography className={classes.smallNavText} variant='h5'>Trainers</Typography>
                <Button onClick={handleDrawerOpen} size='small' variant='contained' className={classes.smallNavButton}>Apply Filters</Button>
            </div>
            <Drawer
                classes={{
                    paper: classes.drawer
                }}
                variant='persistent'
                anchor='left'
                open={open}
                >
                <Button onClick={handleDrawerClose}>close</Button>
            </Drawer>
            <Box className={classes.boxRoot} display='flex' flexDirection='row' justifyContent='center' flexWrap='wrap'>
                {trainers.map(trainer => 
                <Box key={trainer.userId}>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                        <AccountCircleIcon className={classes.icon} fontSize='large' />
                                </IconButton>
                                <Grid container>
                                    <Grid item xs={12}>{trainer.firstName} {trainer.lastName}</Grid>
                                    <Grid item xs={12}>{trainer.email}</Grid>
                                </Grid>
                            </Toolbar>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container>
                                <Grid item xs={12}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur earum enim culpa iure corporis id ea ab est amet perspiciatis, facere magnam eaque repellendus totam ex ipsa facilis sunt?</Grid>
                                <Grid item xs={12}>
                                    {/* <PostComponent/> */}
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                )}
            </Box>
        </div>
    );
}