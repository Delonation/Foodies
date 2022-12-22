import * as React from 'react';
import InstantMessage from '../Component/InstantMessage';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = (props) => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [cPass, setCPass] = React.useState('');
    const [alert, setAlert] = React.useState(false); //Controls Alert
    const [message, setMessage] = React.useState('') //Controls Message
    const [alertType, setAlertType] = React.useState('') //Controls Message


    const SignUp = (e) => {
        setAlert(false);
        e.preventDefault();
        if (pass === cPass) {
            createUserWithEmailAndPassword(auth, email, pass)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setAlertType("success");
                    setMessage(email + " : Successfully Registered")
                    setAlert(true);
                    props.setU(email)
                    props.setAuth(true)
                    navigate("/");
                    // ...
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    props.setAuth(false)
                    setAlertType("error");
                    setMessage(errorMessage)
                    setAlert(true);
                });

        } else {
            setAlertType("error");
            setMessage("Password do not match!")
            setAlert(true);
        }
    }
    return <>
        <Typography variant="h2" component="h2"color='#008000'>
            Register
        </Typography>
        <Container >
            <Box>
                <Card sx={{ marginTop: 5, padding: '5%' }}>
                    <CardContent >
                        <Box
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '50ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <form onSubmit={(event) => { SignUp(event) }}>
                                <div>
                                    <TextField
                                        onInput={(event) => { setEmail(event.target.value) }}
                                        required
                                        type="email"
                                        label="Email"
                                    />

                                </div>
                                <div>
                                    <TextField
                                        required
                                        onInput={(event) => { setPass(event.target.value) }}
                                        label="Password"
                                        type="password"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        onInput={(event) => { setCPass(event.target.value) }}
                                        label="Confirm Password"
                                        type="password"
                                    />
                                </div>
                                <div>

                                    <Button type="submit" variant="contained">Register</Button>
                                </div>
                            </form>
                            <div>

                            </div>
                        </Box>


                    </CardContent>
                </Card>
            </Box>
            {alert ? <InstantMessage message={message} type={alertType} /> : ``}
        </Container>
    </>
}

export default Register