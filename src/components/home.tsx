import React from 'react';
import { makeStyles, Typography, Card, CardActionArea, CardContent, CardActions, CardMedia, 
    Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#1F1F1F',
        color: 'white',
        height: '100vh',
        paddingTop: '65px'
    },
    boxRoot: {
        backgroundColor: '#2F3030'
    },
    banner: {
        position:'relative',
        width: '100%',
        height: '250px',
        marginBottom: '20px'
    },
    bannerText: {
        position: "absolute",
        top: '80%'
    },
    helpButton: {
        position: 'absolute',
        right: '0%',
        top: '90%',
        color: 'white'
    },
    cardRoot: {
        width: '25vw',
        height: '200px',
        marginTop: '20px',
        marginBottom: '20px',
        backgroundColor: 'green'
    },
    cardMedia: {
        height: '75px'
    }
});

export const HomeComponent: React.FC = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography className={classes.bannerText} variant='h2'>
                    Find Your Fit
                </Typography>
                <Button className={classes.helpButton} variant='outlined'>Click for help</Button>
            </div>
            <Box className={classes.boxRoot} display='flex' flexDirection='row' justifyContent='space-around' flexWrap='wrap'>
                <Box>
                    <Card className={classes.cardRoot}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.cardMedia}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event 1
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box>
                    <Card className={classes.cardRoot}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.cardMedia}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event 2
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box>
                    <Card className={classes.cardRoot}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.cardMedia}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event 3
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box>
                    <Card className={classes.cardRoot}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.cardMedia}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event 4
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box>
                    <Card className={classes.cardRoot}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.cardMedia}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event 5
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </div>
    );
}