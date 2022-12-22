import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GradeIcon from '@mui/icons-material/Grade';
import Divider from '@mui/material/Divider';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Tips = () => {

    return <>
        <Typography variant="h2" component="h2" color ='#008000'>
            Tips
        </Typography>
        <Container >
            <Box>
                <Card sx={{ marginTop: 5 }}>
                    <CardContent >
                        <Typography sx={{ fontSize: 21, fontWeight: 500}} color ='#008000' gutterBottom>
                            Baking Tips
                        </Typography>
                        <Divider />

                        <List component="nav" aria-label="secondary mailbox folder">
                            <ListItemButton
                            >
                                <ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Measure properly" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Invest in a good mixer
" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="User room temprature Ingredients
" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Check your oven temperature
" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Don't make substitions
" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Use a light hand
" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Prepare baking pans properly
" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Measure and scoop batter evenly
" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Use quality ingredients
" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Line pans with parachment paper or heavy duty nonstick foil
" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="When baking, it’s important to use room temperature ingredients(unless otherwise specified)
" />
                            </ListItemButton>
                        </List>
                    </CardContent>
                </Card>
            </Box>
            <Divider />
            <Box>
                <Card sx={{ marginTop: 5 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 21, fontWeight: 500 }} color ='#008000' gutterBottom>
                            Cooking Tips
                        </Typography>
                        <Divider />

                        <List component="nav" aria-label="secondary mailbox folder">
                            <ListItemButton
                            >
                                <ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Read the recipe all the way through before you start" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Set up your workspace" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Get comfortable!" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Clean as you go" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Taste your food before seasoning" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Hold a knife properly" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Taste before serving" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Measure and scoop batter evenly" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Set your timer for a few minutes less than the called-for time" />
                            </ListItemButton>
                        </List>
                    </CardContent>
                </Card>
            </Box>
            <Divider />
            <Box>
                <Card sx={{ marginTop: 5 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 21, fontWeight: 500 }} color ='#008000' gutterBottom>
                            Kitchen Hacks
                        </Typography>
                        <Divider />

                        <List component="nav" aria-label="secondary mailbox folder">
                            <ListItemButton
                            >
                                <ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Freeze farmers market vegetables in resealable bags during peak season." />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Use your trusty baking sheet to stay organized while you meal prep." />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Install inexpensive hooks on the inside of your kitchen cabinets to maximize your storage space." />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Repurpose your butter wrapper as a cover for your microwavable dish—so long as the wrapper itself isn’t metallic or foil, of course." />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Cooking fish in parchment is a healthy, mess-free technique that seals in flavour." />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="When you are finished grating fresh roots, freeze the leftover root in a plastic container or resealable bag." />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="The wheel of a pizza cutter is perfect for cutting herbs in all directions." />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Give your dishwasher a break by measuring ingredients directly into your mixing bowl using a digital scale" />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="Drain away any excess fat while baking by placing meat on a baking rack." />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => { }}
                            ><ListItemIcon>
                                    <RestaurantIcon sx={{ color: 'gold' }} />
                                </ListItemIcon>
                                <ListItemText primary="To make herbs last longer trim the stems and place them in a small glass of water. Then place a plastic bag.(like the one you got at the grocer) over top and secure by tying the plastic in a knot or wrapping it with butchers string.)" />
                            </ListItemButton>
                        </List>
                    </CardContent>
                </Card>
            </Box>

        </Container>
    </>
}

export default Tips; 