import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { login as loginService } from "../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onClickLogin = async () => {
    try {
      const res = await loginService(user);
      if (res?.data) {
        dispatch(login(res.data));
      }
    } catch (error) {
        console.log("hola")
    }
  };

  const onUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <Box>
      <Typography>Login</Typography>

      <FormControl margin="normal">
        <TextField
          label="Correo electronico"
          name="email"
          type="email"
          onChange={onUserChange}
        />
        <TextField
          label="Contraseña"
          name="password"
          type="password"
          onChange={onUserChange}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={onClickLogin}
        >
          Iniciar sesion
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
