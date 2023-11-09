

import  Box  from "@mui/material/Box";
import Typography  from "@mui/material/Typography";
import  TextField from "@mui/material/TextField";
import  Button from "@mui/material/Button";
import  FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        return (
            <Box>
                <Typography>Login</Typography>
                <Link to='/'>Home</Link>
                <Link to='profile/1'>Perfil</Link>

                <FormControl margin="normal">
                    <TextField
                    label="Correo electronico"
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    <TextField
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={()=>{
                        console.log("hola");
                    }
                    }
                    >Iniciar sesion</Button>

                </FormControl>
            </Box>
        )
    
}
  
export default Login