import React, { useState } from 'react';
import { makeStyles, Drawer, Button, Toolbar, Typography, Box, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ProfilePostComponent } from './profile.post';
import { useSelector, RootStateOrAny } from 'react-redux';

const useStyles = makeStyles({
    root: {
        paddingTop: '64px',
        backgroundColor: '#1F1F1F',
        minHeight: '100vh',
        color: 'white'
    },
    main: {
        position: 'relative',
        paddingLeft: '15%'
    },
    drawer: {
        marginTop: '65px',
        backgroundColor: 'green',
        width: '30%'
    },
    toolbar: {
        position: 'sticky',
        top: '64px',
        paddingTop: '5px',
        paddingLeft: '5px',
        paddingRight: '5px',
        maxWidth: '100%',
        height: '100px',
        backgroundColor: 'gray',
        color: 'black',
        zIndex: 1
    },
    icon: {
        height: '80px',
        width: '80px',
        marginRight: '10px'
    },
    navName: {
        width: '200px',
        backgroundColor: 'orange',
        marginRight: '10px'
    },
    navEmail: {
        backgroundColor: 'green',
        width: '200px'
    },
    navBio: {
        position: 'absolute',
        right: '5%',
        backgroundColor: 'red',
        width: '600px'
    },
    buttonDiv: {
        position: 'sticky',
        top: '170px'
    },
    button: {
        position: 'absolute',
        right: '1%',
        backgroundColor: 'green'
    }
});

export const ProfileComponent: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const user = useSelector((state: RootStateOrAny) => state.user);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <IconButton className={classes.icon}>
                    {user.firstName[0]}
                </IconButton>
                {/* <AccountCircleIcon className={classes.icon}/> */}
                <Box className={classes.navName}>
                    {user.firstName} {user.lastName}
                </Box>
                <Box className={classes.navEmail}>
                    {user.email}
                </Box>
                <Box className={classes.navBio}>
                    Bio
                </Box>
            </Toolbar>
            <div className={classes.buttonDiv}>
                <Button  className={classes.button} onClick={handleOpen} variant='contained'>Show saved posts</Button>
            </div>
            <div className={classes.main}>
                <ProfilePostComponent/>
            </div>
            <Drawer
             classes={{
                 paper: classes.drawer
             }}
             variant='persistent'
             anchor='left'
             open={open}
             >
                 <Button onClick={handleClose}>Close</Button>
            </Drawer>
        </div>
    );
}