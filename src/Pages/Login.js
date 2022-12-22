import * as React from 'react';
import InstantMessage from '../Component/InstantMessage';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {
    const navigate = useNavigate();


    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [alert, setAlert] = React.useState(false); //Controls Alert
    const [message, setMessage] = React.useState('') //Controls Message
    const [alertType, setAlertType] = React.useState('') //Controls Message

    const Authenticate = (event) => {
        setAlert(false);
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setAlertType("success");
                setMessage("Successfully Logged In")
                setAlert(true);
                props.setU(email)
                props.setAuth(true)
                navigate("/");

            })
            .catch((error) => {
                const errorMessage = error.message;
                setAlertType("error");
                setMessage(errorMessage)
                setAlert(true);
                props.setAuth(false)
            });
    }

    return <>
        <Typography variant="h2" component="h2" color='#008000'>
            Login
        </Typography>
        <Container>
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
                            <form onSubmit={(event) => { Authenticate(event) }}>
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

                                    <Button type="submit" variant="contained">Login</Button>
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

export default Login