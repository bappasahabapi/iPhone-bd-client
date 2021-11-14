import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/iphone.jpeg'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // copy the previous all data
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //handle login submit
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        // loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
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
                        {isLoading && <CircularProgress />}
                        <Typography variant="body1" gutterBottom> 👥 <br /> ✅ Please Login</Typography>

                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Enter Your Email"
                                name="email"
                                variant="standard"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Enter  Your Password"
                                type="password"
                                name="password"
                                variant="standard"
                                onChange={handleOnChange}
                            />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register"
                            >
                                <Button className="fw-bold " variant="h6">👉 New User? Please Register First</Button>
                            </NavLink>

                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {/* {authError && <Alert severity="error">{authError}</Alert>} */}


                        </form>
                        <button onClick={handleGoogleSignIn}
                            className="btn-warning  p-3 mt-3 fw-bold border-0 rounded-pill"
                        >

                            🟢🟡🔴 Google Sign ▶
                        </button>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default Login;