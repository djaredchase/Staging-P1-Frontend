import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Avatar, makeStyles, Divider } from '@material-ui/core';

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

export const PostComponent: React.FC = () => {
    const classes = useStyles();

    return(
        <div>
            <Card className={classes.card}>
                <CardHeader 
                    avatar={
                    <Avatar>Pic</Avatar>}
                    title='Fname Lname'
                    subheader='Date Posted'
                    classes={{
                        subheader: classes.subheader
                    }} />
                <Divider/>
                <CardMedia>
                    Media content here
                </CardMedia>
                <Divider/>
                <CardContent>
                    This will be the actual post text content
                </CardContent>
                <Divider/>
                <CardActions>
                    <Button variant='contained'>
                        Comment
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}