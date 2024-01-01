import FormControl from "@mui/material/FormControl";
import { FunctionComponent, useCallback, useState } from "react";
import loginService from "core/auth/login.service";
import { useDispatch } from "react-redux";
import { login as loginAction } from "core/auth/store/auth-slice";
import useRedirectWhenLogged from "hooks/use-redirect-when-logged";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form/LoginForm";
import { loginProfileStyles } from "./styles/LoginStyles";
import "../../styles/index.css";
import { useSuccessToast } from "hooks/use-success-toast";
import { useErrorToast } from "hooks/use-error-toast";
import { Box } from "@mui/material";

const Login: FunctionComponent = () => {
  const { loading, onSubmit } = useLogin();
  return (
    <Box
      style={loginProfileStyles as unknown as Record<string, number | string>}
    >
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
          alert("Por favor introduce el usuario y la contraseña.");
          return;
        }

        const result = await loginService({
          email,
          password,
        });
        dispatch(loginAction(result));
        showSuccessToast("Inicio de Sesion Exitoso");
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

export default Login;
