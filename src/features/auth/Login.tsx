import FormControl from "@mui/material/FormControl";
import { FunctionComponent, useCallback, useState } from "react";
import loginService from "core/auth/login.service";
import { useDispatch } from "react-redux";
import { login as loginAction } from "core/auth/store/auth-slice";
import useRedirectWhenLogged from "hooks/use-redirect-when-logged";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form/LoginForm";
import { loginProfileStyles } from "./styles/LoginStyles";
import { useSuccessToast } from "hooks/use-success-toast";
import { useErrorToast } from "hooks/use-error-toast";
import SpinnerAbsolute from "components/spinner-absolute";
import { Box } from "@mui/material";

const Login: FunctionComponent = () => {
  const { loading, onSubmit } = useLogin();
  return (
    <Box
      style={loginProfileStyles as unknown as Record<string, number | string>}
    >
      {loading && <SpinnerAbsolute />}
      <FormControl>
        <LoginForm disabled={loading} onSubmit={onSubmit} />
      </FormControl>
    </Box>
  );
};

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  useRedirectWhenLogged();

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      try {
        if (!email || !password) {
          showErrorToast(getFieldsRandomErrorPhrase());
          return;
        }

        const result = await loginService({
          email,
          password,
        });
        dispatch(loginAction(result));
        showSuccessToast(getRandomWelcomePhrase());
        navigate(`/dashboard`);
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [navigate, dispatch, showSuccessToast, showErrorToast]
  );

  return { onSubmit, loading };
}

function getRandomWelcomePhrase() {
  const phrases = [
    "¡Bienvenido devuelta 👋!",
    "¡Hola de nuevo 👋!",
    "¡Qué bueno verte otra vez 👋!",
    "¡Qué bueno verte de nuevo 👋!",
    "¡Un gusto verte otra vez 👋!",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function getFieldsRandomErrorPhrase() {
  const phrases = [
    "Recuerda debes introducir el usuario y la contraseña 😬!",
    "Si no introduces el usuario y la contraseña no podras autenticarte 😣!",
    "Por favor introduce el usuario y la contraseña 🙏!",
    "Por favor introduce el usuario y la contraseña 😅!",
    "Oye!, no olvides introducir el usuario y la contraseña 😖!",
    "No olvides introducir el usuario y la contraseña antes 😁!",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export default Login;
