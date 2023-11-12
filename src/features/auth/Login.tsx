import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { FunctionComponent, useCallback, useState } from "react";
import loginService from "features/auth/services/login.service";
import { useDispatch } from "react-redux";
import { login as loginAction } from "features/auth/store";
import useRedirectWhenLogged from "./use-redirect-when-logged";
import useLoginFormState from "./use-login-form-state";
import { useNavigate } from "react-router-dom";

const Login: FunctionComponent<void> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useRedirectWhenLogged();

  const [loading, setLoading] = useState(false);
  const { email, password, onChangeEmail, onChangePassword } =
    useLoginFormState();

  const onClickLogin = useCallback(async () => {
    setLoading(true);
    try {
      const result = await loginService({
        email,
        password,
      });
      dispatch(loginAction(result));
      navigate(`/profile/${result.id}`);
    } catch (error) {
      // Monstramos mensaje de error :)
    } finally {
      setLoading(false);
    }
  }, [dispatch, email, password, navigate]);

  return (
    <Box>
      <Typography>Login</Typography>
      <FormControl margin="normal">
        <TextField
          value={email}
          label="Correo electronico"
          type="email"
          onChange={onChangeEmail}
          disabled={loading}
        />
        <TextField
          value={password}
          label="Contraseña"
          type="password"
          onChange={onChangePassword}
          disabled={loading}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          onClick={onClickLogin}
        >
          Iniciar sesion
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
