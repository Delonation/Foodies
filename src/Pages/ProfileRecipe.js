import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GradeIcon from '@mui/icons-material/Grade';
import { ref as _ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import CircularProgressWithLabel from '../Component/loader'
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { storage } from '../App.js';

const ProfileRecipe = (props) => {

    const { DATA, user } = props;
    const [data, setData] = React.useState(DATA);
    const [fData, setfData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [ingredeients, setIngredients] = React.useState([])
    const [instructions, setInstructions] = React.useState([])

    useEffect(() => {
        setData(DATA)
    }, [DATA])

    useEffect(() => {
        if (DATA) {

            setfData(DATA)
        }

    }, [DATA])

    const style = {
        position: 'absolute',
        overflowY: 'auto',
        display: 'block',
        top: '50%',
        left: '50%',
        height: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'white',
        borderRadius: '7px',
        boxShadow: '3px 3px 5px #E8E8E8',
        margin: 5,
        p: 4,
    };

    const renderModal = (targetID) => {
        console.log(targetID)
        DATA.forEach((d) => {
            if (d.name === targetID.name) {

                setIngredients(d.ingredients)
                setInstructions(d.instructions)
            }
        })
        setOpen(true)
    }

    return <>
        <Typography variant="h2" component="h2" color='#008000'>
            My Recipes
        </Typography>

        <div>
            <Box sx={{ flexGrow: 1, ml: 5, mr: 5 }} style={{ marginBottom: 70 }}>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

                    {

                        fData.map((d) => {
                            if (d.createdBy === user) {
                                return <Grid key={d.id + d.name} item>
                                    <Card sx={{ maxWidth: 320, minHeight: 400 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={d.img}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {d.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <b>Time</b> : {d.time} | <b>Cusine</b> : {d.cusine} | <b>Protein</b> : {d.protein} | <b>Diet</b> : {d.diet}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions >
                                            <Button onClick={() => renderModal(d)} sx={{ align: 'right', color: "#008000" }} size="small" color="primary">
                                                Lets Cook
                                            </Button>
                                        </CardActions>
                                    </Card>

                                </Grid>
                            }

                        })
                    }<Modal

                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" color="#008000">
                                Instructions
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {
                                    instructions.map((ins) => {
                                        return <List component="nav" aria-label="secondary mailbox folder">
                                            <ListItemButton
                                            >
                                                <ListItemIcon>
                                                    <GradeIcon sx={{ color: 'gold' }} />
                                                </ListItemIcon>
                                                <ListItemText primary={ins} />
                                            </ListItemButton>

                                        </List>
                                    })
                                }
                            </Typography>
                            <Divider />
                            <Typography sx={{ marginTop: 5 }} id="modal-modal-title" variant="h6" component="h2" color="#008000">
                                Ingredients
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {
                                    ingredeients.map((ing) => {
                                        return <List component="nav" aria-label="secondary mailbox folder">
                                            <ListItemButton
                                            >
                                                <ListItemIcon>
                                                    <GradeIcon sx={{ color: 'gold' }} />
                                                </ListItemIcon>
                                                <ListItemText primary={ing} />
                                            </ListItemButton>

                                        </List>
                                    })
                                }
                            </Typography>
                        </Box>
                    </Modal>

                </Grid>
            </Box>
        </div>
    </>
}

export default ProfileRecipe;