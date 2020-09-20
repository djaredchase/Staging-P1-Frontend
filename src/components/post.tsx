import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Avatar, makeStyles, Divider } from '@material-ui/core';
import { Post } from '../models/post';

const useStyles = makeStyles({
    card: {
        maxWidth: '700px',
        marginLeft: '50px',
        marginTop: '25px',
        backgroundColor: '#1F1F1F',
        color: 'white',
        border: '2px',
        borderStyle: 'solid',
        borderColor: 'white'
    },
    subheader: {
        color: 'white'
    }
});

interface PostComponentProps {
    posts: Post[];
}

export const PostComponent: React.FC<PostComponentProps> = (props) => {
    const classes = useStyles();

    return(
        <div>
            {props.posts.map(post =>
                <Card key={post.id} className={classes.card}>
                    <CardHeader 
                        avatar={
                        <Avatar>Pic</Avatar>}
                        title={post.author.firstName + ' ' + post.author.lastName}
                        subheader={post.postedDate}
                        classes={{
                            subheader: classes.subheader
                        }} />
                    <Divider/>
                    <CardMedia>
                        {post.media}
                    </CardMedia>
                    <Divider/>
                    <CardContent>
                        {post.content}
                    </CardContent>
                    <Divider/>
                    <CardActions>
                        <Button variant='contained'>
                            Comment
                        </Button>
                    </CardActions>
                </Card>
            )}
        </div>
    );
}