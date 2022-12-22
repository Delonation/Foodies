import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Footer = () => {
    return (
        <>
            <footer style={{ position: "fixed", bottom: 0, width: '100%' }} >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar style={{ background: '#FEFBEA', color: '#008000' }} position="static">
                        <Toolbar>
                            <Typography variant="overline" display="block" align="center" gutterBottom component="div" sx={{ flexGrow: 1 }}>
                                Copyright © Kearies Donelson
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </footer>
        </>
    )
}

export default Footer;