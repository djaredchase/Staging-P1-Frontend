import React, { useState, useEffect } from 'react';
import { makeStyles, Toolbar, Typography, Box, TextField, FormControl, IconButton, Drawer } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { PostComponent } from './post';
import * as postRemote from '../remotes/post.remote';
import { Post } from '../models/post';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        paddingTop: '65px',
        backgroundColor: '#1F1F1F',
        minHeight: '100vh'
    },
    banner: {
        height: '250px',
        width: '80%',
        backgroundColor: 'gray',
        marginLeft: '20%'
    },
    toolbar: {
        position: 'sticky',
        top: '65px',
        backgroundColor: 'gray',
        width: '80%',
        marginLeft: '20%',
        margin: 0,
        padding: 0,
        zIndex: 1
    },
    toolbarText: {
        position: 'absolute'
    },
    toolbarSearch: {
        position: 'absolute',
        right: '12px'
    },
    drawer: {
        backgroundColor: 'green',
        width: '20%',
        marginTop: '65px'
    },
    main: {
        //backgroundColor: 'red',
        width: '80%',
        marginLeft: '20%'
    }
});

export const CommunityComponent: React.FC = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            let postArray;
            try {
                postArray = await postRemote.getAllPosts();
            } catch {
                return;
            }
            setPosts(postArray);
        }
        loadPosts();
    }, [])

    return(
        <div className={classes.root}>
            <div className={classes.banner}>Banner</div>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.toolbarText} variant='h3'>Community</Typography>
                <FormControl className={classes.toolbarSearch}>
                    <Toolbar>
                        <TextField label='Search' variant='filled' />
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Toolbar>
                </FormControl>
            </Toolbar>
            <Drawer
                variant='permanent'
                anchor='left'
                classes={{
                    paper: classes.drawer
                }}>

            </Drawer>
            <div className={classes.main}>
                <PostComponent posts={posts}/>
            </div>
        </div>
    );
}