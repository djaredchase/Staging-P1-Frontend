import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles({
    toolbar: {
        width: '100%'
    },
    navButton: {
        color: 'white'
    },
    navBar: {
        backgroundColor: 'black'
        //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
});

export const NavbarComponent: React.FC = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <div>
            <AppBar className={classes.navBar} position="fixed">
                <Toolbar>
                    <Box className={classes.toolbar} display='flex' flexDirection='row' justifyContent='space-around'>
                        <Box>
                            <Button component={Link} to='/' className={classes.navButton} size='large'>
                                Home
                            </Button>
                        </Box>
                        <Box>
                            <Button component={Link} to='/community' className={classes.navButton} size='large'>
                                Community
                            </Button>
                        </Box>
                        <Box>
                            <Button component={Link} to='/trainers' className={classes.navButton} size='large'>
                                Trainers
                            </Button>
                        </Box>
                    </Box>
                    <IconButton aria-controls='simple-menu'
                     aria-haspopup='true'
                     onClick={handleClick}
                     edge="start" color="inherit"
                     >
                        <AccountCircleIcon fontSize='large' />
                    </IconButton>
                    <Menu
                     id='simple-menu'
                     anchorEl={anchorEl}
                     keepMounted
                     open={Boolean(anchorEl)}
                     onClose={handleClose}>
                        <MenuItem onClick={handleClose} component={Link} to='/profile'>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}