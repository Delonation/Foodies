import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



const Utensils = () => {
    const [open, setOpen] = React.useState(false);
    const [modalImg, setModalImg] = React.useState('');
    const handleClose = () => setOpen(false);


    const styleImg = {
        position: 'absolute',
        overflowY: 'auto',
        display: 'flex',
        top: '47%',
        left: '50%',
        height: '70%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'white',
        borderRadius: '7px',
        boxShadow: '3px 3px 5px #E8E8E8',
        margin: 5,
        p: 4,

    }
    let uten = [
        {
            id: 0,
            name: "Skillet",
            img: "./assets/img/skillet.jpeg",
            desc: "Skillets are commonly used to stir-fry or sauté, which refers to a method of cooking in which ingredients are cooked quickly in a small amount of oil or fat, often over relatively high heat"
        },
        {
            id: 1,
            name: "Sauce Pan",
            img: "./assets/img/saucepan.webp",
            desc: "A saucepan is a piece of cookware that functions as a small, deep pot for cooking liquids on a stovetop."
        },
        {
            id: 2,
            name: "Stock Pot",
            img: "./assets/img/pot.jpeg",
            desc: "A stock pot is traditionally used to make stock or broth, which can be the basis for cooking more complex recipes."
        },
        {
            id: 3,
            name: "Roasting Pan",
            img: "./assets/img/roastingpan.jpeg",
            desc: "A roasting pan is for roasting large pieces of meat."
        },
        {
            id: 4,
            name: "Spatula",
            img: "./assets/img/sparula.jpg",
            desc: "A spatula is a kitchen utensil you can use to mix, scrape, flip, or spread ingredients."
        },
        {
            id: 5,
            name: "Arguably",
            img: "./assets/img/tongs.jpeg",
            desc: "Arguably the most widely used and versatile type, utility tongs are suitable for flipping or turning foods during cooking, removing cooked foods from boiling water and handling hot foods from the oven or grill."
        },
        {
            id: 6,
            name: "Whisks",
            img: "./assets/img/whisk.png",
            desc: "Whisks are used to blend ingredients together quickly or to incorporate air into ingredients such as egg whites or heavy cream in order to increase the volume of the mixture."
        },
        {
            id: 7,
            name: "Measuring Cup",
            img: "./assets/img/measurecup.jpeg",
            desc: "A measuring cup is a kitchen utensil used primarily to measure the volume of liquid or bulk solid cooking ingredients such as flour and sugar, especially for volumes from about 50 mL (2 fl oz) upwards."
        },
        {
            id: 8,
            name: "Pizza Cutter",
            img: "./assets/img/pizzacutter.webp",
            desc: "A curved or circular cutting blade with a handle that serves as a cutting tool to cleanly slice pizza, lasagna, flatbread crusts, brownies, and other similar foods into smaller pieces."
        },

    ]

    const renderModal = (id) => {
        uten.forEach((u) => {
            if (u.id === id) {
                setModalImg(u.img);
            }
        })
        setOpen(true)
    }

    return <>
        <Typography variant="h2" component="h2">
            Utensils
        </Typography>
        <Container>
            <Box >
                <Grid container spacing={2} sx={{ marginBottom: 10 }}>
                    {uten.map((u) => {
                        return <Grid key={u.id} item >
                            <CardActionArea onClick={() => { renderModal(u.id) }}>
                                <Card sx={{ maxWidth: 345, minHeight: 400 }}>
                                    <CardMedia sx={{ objectFit: 'contain' }}
                                        component="img"
                                        height="200"
                                        image={u.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {u.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {u.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>

                    })}
                </Grid>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={styleImg}>
                    <img
                        style={{ alignSelf: 'center', margin: '0 auto', objectFit: 'contain' }}
                        src={modalImg}
                        width='600px'
                        srcSet={modalImg}
                        alt="utensils"
                        loading="lazy"
                    />
                </Box>
            </Modal>
        </Container>
    </>
}

export default Utensils; 