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
// import DATA from '../Component/data';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GradeIcon from '@mui/icons-material/Grade';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';
import { getDatabase, ref, set } from "firebase/database";
import { ref as _ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import CircularProgressWithLabel from '../Component/loader'
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { storage } from '../App.js';



const Home = (props) => {
    const { DATA, isAuthenticated, user } = props;

    const [data, setData] = React.useState(DATA);
    const [fData, setfData] = React.useState([]);
    const [DietFilter, setDietFilter] = React.useState([]);
    const [ProteinFilter, setProteinFilter] = React.useState([]);
    const [CusineFilter, setTCusineFilter] = React.useState([]);
    const [timeFIlter, setTimeFilter] = React.useState([]);
    const [time, setTime] = React.useState("");
    const [protein, setProtein] = React.useState("");
    const [diet, setDiet] = React.useState("");
    const [cusine, setCusine] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleCloseAdd = () => setOpenAdd(false);
    const [ingredeients, setIngredients] = React.useState([])
    const [instructions, setInstructions] = React.useState([])
    const [addName, setAddName] = React.useState('')
    const [addTime, setAddTime] = React.useState('')
    const [addCusine, setAddCusine] = React.useState('')
    const [addProtein, setAddProtein] = React.useState('')
    const [addDiet, setAddDiet] = React.useState('')
    const [addIngredients, setAddIngredients] = React.useState('')
    const [addInstructions, setAddInstructions] = React.useState('')
    // File
    const [file, setFile] = React.useState(null);
    const [percent, setPercent] = React.useState(0);

    function writeUserData(name, email, diet, img, ingredient, instructions, protein, time) {
        const db = getDatabase();
        set(ref(db, '/' + parseInt(data.length)), {
            name: name,
            cusine: email,
            diet: diet,
            img: img,
            ingredients: ingredient,
            instructions: instructions,
            protein: protein,
            time: time
        });
    }
    useEffect(() => {
        setData(DATA)
    }, [DATA])


    // Handle file upload event and update state
    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = _ref(storage, `/IMG/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    addRecipes(url)
                });
            }
        );
    };
    const addRecipes = (img_url) => {
        if (addName !== "" && addTime !== "" && addCusine !== "" && addProtein !== "" && addDiet !== "" && addIngredients !== "" && addInstructions !== "") {
            let newRecipe = {}
            let ing = addIngredients.split(/\r?\n/).filter(a => a.length > 0);
            let ins = addInstructions.split(/\r?\n/).filter(a => a.length > 0);

            newRecipe['name'] = addName;
            newRecipe['protein'] = addProtein;
            newRecipe['diet'] = addDiet;
            newRecipe['cusine'] = addCusine;
            newRecipe['time'] = addTime;
            newRecipe['img'] = img_url;
            newRecipe['ingredients'] = ing;
            newRecipe['instructions'] = ins;
            writeUserData(addName, addCusine, addDiet, img_url, ing, ins, addProtein, addTime)
            let temp = data;
            newRecipe['id'] = temp.length + 1;
            newRecipe['createdBy'] = user;

            temp.push(newRecipe)
            setData(temp)
            setfData(temp)
            handleCloseAdd();
            setPercent(0)
        } else {
            alert("Please Fill All fields.")
        }

    }

    const handleChange = (event) => {
        let value = event.target.value;
        switch (event.target.name) {
            case "time":
                setTime(value)
                break;
            case "protein":
                setProtein(value);
                break;
            case "diet":
                setDiet(value);
                break;
            case "cusine":
                setCusine(value);
                break;
            default:
                alert("Invalid Selection")

        }

    };

    const searchProduct = (event) => {
        if (event.target.value !== "") {
            let filteredData = data.filter((d) => {
                if (d.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) {
                    return d;
                }
            })
            setfData(filteredData)
        } else {
            setfData(DATA)

        }

    }

    const getRecipes = () => {
        let filteredData = data;
        let temp = [{ "protein": protein }, { "diet": diet }, { "cusine": cusine }, { "time": time }]
        temp.forEach((key) => {
            if (key[Object.keys(key)[0]] !== "") {
                filteredData = filteredData.filter((d) => {
                    if (Object.keys(key)[0] === "protein") {
                        if (d.protein === key[Object.keys(key)[0]] || key[Object.keys(key)[0]] === "All") {
                            return d;
                        }
                    } else if (Object.keys(key)[0] === "diet") {
                        if (d.diet === key[Object.keys(key)[0]] || key[Object.keys(key)[0]] === "All") {
                            return d;
                        }
                    } else if (Object.keys(key)[0] === "time") {
                        if (d.time === key[Object.keys(key)[0]] || key[Object.keys(key)[0]] === "All") {
                            return d;
                        }
                    } else if (Object.keys(key)[0] === "cusine") {
                        if (d.cusine === key[Object.keys(key)[0]] || key[Object.keys(key)[0]] === "All") {
                            return d;
                        }
                    }

                })
            }

        })
        return filteredData;
    }

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

    const populateDropdown = (data) => {
        data.forEach((d) => {
            if (!timeFIlter.includes(d.time)) {
                setTimeFilter((prev) => { return [...new Set([d.time, ...prev])] })
            }
            if (!CusineFilter.includes(d.cusine)) {
                setTCusineFilter((prev) => { return [...new Set([d.cusine, ...prev])] })
            }
            if (!ProteinFilter.includes(d.protein)) {
                setProteinFilter((prev) => { return [...new Set([d.protein, ...prev])] })
            }
            if (!DietFilter.includes(d.diet)) {
                setDietFilter((prev) => { return [...new Set([d.diet, ...prev])] })
            }
        });
    }

    useEffect(() => {
        if (DATA) {

            populateDropdown(DATA)
            setfData(DATA)
        }

    }, [DATA])

    useEffect(() => {
        setfData(getRecipes())
    }, [time, protein, diet, cusine])

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

    return <>
        <div>

            <Container maxWidth="sm">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h2" component="h2" color="#008000">
                        Crafty Foods
                    </Typography>;
                    <TextField id="txt_Search" label="Search..." onInput={(event) => { searchProduct(event) }} variant="filled" sx={{ width: '50ch' }} />
                    <Divider variant="middle" />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">via Time</InputLabel>
                        <Select
                            name="time"
                            labelId="demo-simple-select-standard-label"
                            id="time"
                            value={time}
                            onChange={handleChange}
                            label="via Time"
                        >
                            <MenuItem key='AllTime' value="All">
                                <em>All</em>
                            </MenuItem>
                            {
                                timeFIlter?.map((t) => {
                                    return <MenuItem key={t} value={t}>{t}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">via Cusine</InputLabel>
                        <Select
                            name="cusine"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={cusine}
                            onChange={handleChange}
                            label="via Cusine"
                        >
                            <MenuItem key='AllCusine' value="All">
                                <em>All</em>
                            </MenuItem>
                            {
                                CusineFilter?.map((t) => {
                                    return <MenuItem key={t} value={t}>{t}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">via Protein</InputLabel>
                        <Select
                            name="protein"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={protein}
                            onChange={handleChange}
                            label="via Protein"
                        >
                            <MenuItem key='AllProtein' value="All">
                                <em>All</em>
                            </MenuItem>
                            {
                                ProteinFilter?.map((t) => {
                                    return <MenuItem key={t} value={t}>{t}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">via Diet</InputLabel>
                        <Select
                            name="diet"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={diet}
                            onChange={handleChange}
                            label="via Diet"
                        >
                            <MenuItem key='AllDiet' value="All">
                                <em>All</em>
                            </MenuItem>
                            {
                                DietFilter?.map((t) => {
                                    return <MenuItem key={t} value={t}>{t}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
                <Divider variant="middle" sx={{ mb: 2.0 }} />

            </Container>

        </div >


        <div>
            <Box sx={{ flexGrow: 1, ml: 5, mr: 5 }} style={{ marginBottom: 70 }}>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {(isAuthenticated == true) ? <><Grid key="add" item>
                        <CardActionArea onClick={() => { setOpenAdd(true) }}>
                            <Card sx={{ maxWidth: 320, minHeight: 400 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image='./assets/img/addNew.png'
                                    alt="Add Recipes"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="h3">
                                        Add New Recipes
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                        <Modal
                            open={openAdd}
                            onClose={handleCloseAdd}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography variant="h2" component="h2">
                                    Add New Recipes
                                </Typography>
                                <Divider />
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '21ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField onInput={(event) => { setAddName(event.target.value) }} label="Name" variant="standard" />
                                    <TextField onInput={(event) => { setAddTime(event.target.value) }} label="Time" variant="standard" />
                                    <TextField onInput={(event) => { setAddCusine(event.target.value) }} label="Cusine" variant="standard" />
                                    <TextField onInput={(event) => { setAddProtein(event.target.value) }} label="Protein" variant="standard" />
                                    <TextField onInput={(event) => { setAddDiet(event.target.value) }} label="Diet" variant="standard" />
                                    {/* <div>
                                        <input type="file" onChange={handleFileChange} accept="image/png, image/gif, image/jpeg" />
                                        <CircularProgressWithLabel value={percent} />
                                    </div> */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'nowrap',
                                        width: '100%',
                                        alignItems: 'center'
                                    }}>
                                        <Button
                                            component="label"
                                            variant="outlined"
                                            startIcon={<UploadFileIcon />}
                                            sx={{ marginRight: "1rem" }}
                                        >
                                            Upload Image
                                            <CircularProgressWithLabel value={percent} />
                                            <input type="file" hidden accept="image/*" onChange={handleFileChange} />
                                        </Button>
                                        <Box>{file?.name}</Box>

                                    </div>
                                </Box>
                                <Divider />
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextareaAutosize
                                        aria-label="Ingredients"
                                        minRows={6}
                                        variant="outlined"
                                        placeholder="Ingredients"
                                        style={{ width: '100%' }}
                                        onInput={(event) => { setAddIngredients(event.target.value) }}
                                    />
                                </Box>
                                <Divider />
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextareaAutosize
                                        aria-label="Instructions"
                                        minRows={6}
                                        variant="outlined"
                                        placeholder="Instructions"
                                        style={{ width: '100%' }}
                                        onInput={(event) => { setAddInstructions(event.target.value) }}
                                    />
                                </Box>
                                <Divider />
                                <Stack style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }} spacing={2} direction="row">
                                    <Button onClick={handleUpload} variant="contained">Add Recipes</Button>
                                </Stack>
                            </Box>

                        </Modal>
                    </Grid></> : null}

                    {

                        fData.map((d) => {
                            // if (d.createdBy === undefined) {

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

                            // }

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

export default Home;  