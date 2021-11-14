import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/iphone.jpeg'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();


    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };



    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match 😑');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>

            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '50%', marginTop: '60px' }} src={login} alt="" />
                    </Grid>
                    <Grid item sx={{ mt: 18 }} xs={12} md={6}>
                        {user?.email && <Alert severity="success">Login successfully!👍</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        <Typography variant="body1" gutterBottom> 👥 <br /> ✅ Please Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Enter Your Name"
                                name="name"
                                variant="standard"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Enter Your Email"
                                name="email"
                                type="email"
                                variant="standard"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Enter  Your Password shoud be more than six character"
                                type="password"
                                name="password"
                                variant="standard"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Confirm  Your Password"
                                type="password"
                                name="password2"
                                variant="standard"
                                onBlur={handleOnBlur}
                            />

                            <Button sx={{ width: '75%' }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login"
                            >
                                <Button className="fw-bold " variant="h6">👉 Already Registered? Please Login</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}

                        </form>}
                    </Grid>

                </Grid>

            </Container>
        </>
    );
};

export default Register;