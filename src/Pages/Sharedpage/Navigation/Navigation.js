import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';




const Navigation = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    //--------------------
    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },

        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },

        navLogo: {
            [theme.breakpoints.up('sm')]: {
                textAlign: 'left'
            }
        }
    });



    const { navIcon, navItemContainer, navLogo, navItem } = useStyle();



    // --------------

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText>
                        <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'blue' }}>
                            <Button color="inherit">Dashboard</Button>
                        </NavLink>
                        {
                            user.email && <Button color="inherit" style={{ textDecoration: 'none', color: 'blue' }} onClick={logout}>Log Out</Button>
                        }
                    </ListItemText>

                    <ListItemText>
                        <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                            {
                                !user.email && <Button color="inherit" style={{ textDecoration: 'none', color: 'blue' }}>Login</Button>
                            }
                        </NavLink>
                    </ListItemText>
                </ListItem>
            </List>
        </Box>
    );

    // ----------


    const [state, setState] = React.useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>

                <AppBar position="static"  >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon>i</MenuIcon>
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            iPhone-bd
                        </Typography>
                        <Box className={navItemContainer}>
                            <NavLink className={navItem} to="/home">
                                <Button className="text-light" >Home</Button>
                            </NavLink>

                            <Link className={navItem} to="/order">
                                <Button className="text-light"  >Order</Button>
                            </Link>
                        </Box>



                        {
                            user?.email ?
                                <Box className={navItemContainer}>
                                    <NavLink style={{ textDecoration: 'none' }} to="/dashboard">
                                        <Button style={{ color: 'white', fontWeight: "bold" }} >DashBoard</Button>



                                    </NavLink>

                                    <Button
                                        onClick={logout}
                                        style={{ color: 'white', fontWeight: "bold" }}>LogOut
                                    </Button>
                                    <Typography variant="small" style={{ color: "black" }}>
                                        {user?.displayName}

                                    </Typography>

                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none' }} to="/login">
                                    <Button style={{ color: 'white', fontWeight: "bold" }} >Login  </Button>
                                </NavLink>

                        }
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>

                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;
