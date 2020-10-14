import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Login } from '../models/login';
import { User } from '../models/user';
import { loginUser } from '../remotes/auth.remote';
import { login } from '../redux/actions/user.actions';

const useStyles = makeStyles({
    root: {
        background: '#1F1F1F',
        minHeight: '100vh',
        paddingTop: '65px',
        color: 'white',
        textAlign: 'center'
    },
    form: {
        textAlign: 'center',
        background: 'gray',
        padding: '10px',
        border: '2px solid gray',
        borderRadius: '10px'
    },
    input: {
        color: 'white'
    }
});

interface LoginResponse {
    accessToken: 'string';
    user: User;
}

export const LoginComponent: React.FC = () => {
    const classes = useStyles();
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    let response: any;
    const handleSubmit = async () => {
        const payload: Login = {
            usernameOrEmail: usernameOrEmail,
            password: password
        };

        try {
            response = await loginUser(payload);
            setUsernameOrEmail('');
            setPassword('');
            //set token in local storage here
            localStorage.setItem('token', response.accessToken);
            //dispatch action with user passed in to set authenticated user state in store
            dispatch(login(response.user));
            history.push('/');
        }catch {
            alert('Error on login. Check credentials and try again.');
        }
    }

    return(
        <div className={classes.root}>
            <h1>Login</h1>
            <Grid container spacing={0}>
                <Grid item xs={4}></Grid>
                <Grid className={classes.form} item xs={4}>
                    <TextField
                    label='Username or Email'
                    fullWidth
                    margin='dense'
                    variant='filled'
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                    <TextField
                    label='Password'
                    fullWidth
                    margin='dense'
                    variant='filled'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <Button onClick={handleSubmit} variant='outlined'>Submit</Button>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </div>
    )
}