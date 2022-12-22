import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const Navbar = (props) => {
    const { user, setU, isAuth, setAuth } = props
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <DinnerDiningIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: '55px', color: '#008000' }, mr: 1 }} />


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {/* {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))} */}

                                <MenuItem key={"home"} onClick={handleCloseNavMenu}>
                                    <Link style={{ textDecoration: 'none' }} to="/" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color='#008000'>
                                        Home
                                    </Typography></Link>
                                </MenuItem>
                                <MenuItem key={"tips"} onClick={handleCloseNavMenu}>
                                    <Link style={{ textDecoration: 'none' }} to="/tips" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                        Tips
                                    </Typography></Link>
                                </MenuItem>
                                <MenuItem key={"utensils"} onClick={handleCloseNavMenu}>
                                    <Link style={{ textDecoration: 'none' }} to="/utensils" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                        Utensils
                                    </Typography></Link>
                                </MenuItem>
                                {(isAuth === false) ? <>
                                    <MenuItem key={"login"} onClick={handleCloseNavMenu}>
                                        <Link style={{ textDecoration: 'none' }} to="/login" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                            Login
                                        </Typography></Link>
                                    </MenuItem>
                                    <MenuItem key={"register"} onClick={handleCloseNavMenu}>
                                        <Link style={{ textDecoration: 'none' }} to="/register" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                            Register
                                        </Typography></Link>
                                    </MenuItem></> : <>
                                    <MenuItem key={"profileRecipe"} onClick={handleCloseNavMenu}>
                                        <Link style={{ textDecoration: 'none' }} to="/myRecipe" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                            My Recipes
                                        </Typography></Link>
                                    </MenuItem>
                                </>
                                }
                            </Menu>
                        </Box>
                        {/* <DinnerDiningIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link style={{ textDecoration: 'none' }} to="/" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color='#008000'>
                                Home
                            </Typography></Link>
                            <Link style={{ textDecoration: 'none' }} to="/tips" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                Tips
                            </Typography></Link>
                            <Link style={{ textDecoration: 'none' }} to="/utensils" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                Utensils
                            </Typography></Link>
                            {(isAuth === false) ? <><Link style={{ textDecoration: 'none' }} to="/login" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                Login
                            </Typography></Link><Link style={{ textDecoration: 'none' }} to="/register" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                Register
                            </Typography></Link></> : <><Link style={{ textDecoration: 'none' }} to="/myRecipe" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                My Recipes
                            </Typography></Link>
                            </>
                            }

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                {user}
                                {(user !== "Guest") ? <IconButton onClick={() => { setU('Guest'); setAuth(false); navigate('/') }} color="primary" aria-label="uLogout" component="label">
                                    <PowerSettingsNewIcon sx={{ fontSize: '28px', color: 'red' }} />
                                </IconButton> : ''}

                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
                {/* <AppBar style={{ background: '#FEFBEA', color: '#008000' }} position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" justify="flex-start" sx={{ mr: 2 }}>
                            CraftyFoods
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link style={{ textDecoration: 'none' }} to="/" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color='#008000'>
                                Home
                            </Typography></Link>
                            <Link style={{ textDecoration: 'none' }} to="/tips" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                Tips
                            </Typography></Link>
                            <Link style={{ textDecoration: 'none' }} to="/utensils" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                Utensils
                            </Typography></Link>
                            {(isAuth === false) ? <><Link style={{ textDecoration: 'none' }} to="/login" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                Login
                            </Typography></Link><Link style={{ textDecoration: 'none' }} to="/register" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                Register
                            </Typography></Link></> : <><Link style={{ textDecoration: 'none' }} to="/myRecipe" color="inherit"><Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                My Recipes
                            </Typography></Link></>}

                        </Box>
                        <Box sx={{ flexGrow: 0 }}>

                            <Typography variant="h5" component="h5" sx={{ mr: 1 }} color="#008000">
                                {user}
                                {(user !== "Guest") ? <IconButton onClick={() => { setU('Guest'); setAuth(false); navigate('/') }} color="primary" aria-label="uLogout" component="label">
                                    <PowerSettingsNewIcon sx={{ fontSize: '28px', color: 'red' }} />
                                </IconButton> : ''}

                            </Typography>

                        </Box>
                    </Toolbar>
                </AppBar> */}
            </Box>

        </>
    )
}

export default Navbar