import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { User } from '../models/user';
import { registerUser } from '../remotes/auth.remote';

const useStyles = makeStyles({
    root: {
        background: '#1F1F1F',
        paddingTop: '65px',
        minHeight: '100vh',
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
    text: {
        width: '45%',
        marginLeft: '10px',
        marginRight: '10px'
    },
    email: {
        width: '93%'
    }
})

export const RegisterComponent: React.FC = () => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async () => {
        const payload: User = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
            email: email,
            role: {
                id: role.toLowerCase() == 'trainer' ? 1 : 2,
                role: role.toLowerCase()
            },
            category: {
                id: setCatId(),
                category: category.toLowerCase()
            }
        };

        try {
            await registerUser(payload);
            clearInputs();
            alert('user created successfully');
        }catch {
            alert('an error occurred');
        }
    }

    const setCatId = () => {
        switch(category.toLowerCase()) {
            case 'performance':
                return 1;
            case 'physique':
                return 2;
            case 'performance':
                return 3;
            default:
                return 1;
        }
    }

    const clearInputs = () => {
        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
        setEmail('');
        setRole('');
        setCategory('');
    }

    return (
        <div className={classes.root}>
            <h1>Register</h1>
            <Grid container spacing={0}>
                <Grid item xs={3}></Grid>
                <Grid className={classes.form} item xs={6}>
                    <div>

                        <TextField
                            label='First Name'
                            margin='dense'
                            variant='filled'
                            className={classes.text}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            label='Last Name'
                            margin='dense'
                            variant='filled'
                            className={classes.text}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            label='Username'
                            margin='dense'
                            variant='filled'
                            className={classes.text}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label='Password'
                            margin='dense'
                            variant='filled'
                            className={classes.text}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <TextField
                        label='Email'
                        margin='dense'
                        variant='filled'
                        className={classes.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        <TextField
                            label='Role'
                            margin='dense'
                            variant='filled'
                            select
                            className={classes.text}
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value='trainer'>Trainer</option>
                            <option value='member'>Member</option>
                        </TextField>
                        <TextField
                            label='Category'
                            margin='dense'
                            variant='filled'
                            select
                            className={classes.text}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value='performance'>Performance</option>
                            <option value='physique'>Physique</option>
                            <option value='fitness'>Fitness</option>
                        </TextField>
                    </div>
                    <br />
                    <Button onClick={handleSubmit} size='large' variant='outlined'>Submit</Button>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
    )
}