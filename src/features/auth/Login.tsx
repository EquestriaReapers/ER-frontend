import FormControl from "@mui/material/FormControl";
import { FunctionComponent, useCallback, useState } from "react";
import loginService from "features/auth/services/login.service";
import { useDispatch } from "react-redux";
import { login as loginAction } from "features/auth/store/auth-slice";
import useRedirectWhenLogged from "../../hooks/use-redirect-when-logged";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form/LoginForm";
import { useErrorToast } from "../../hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import Div100vh from "react-div-100vh";
import { loginProfileStyles } from "./styles/LoginStyles";
import "../../styles/index.css";

const Login: FunctionComponent = () => {
  const { loading, onSubmit } = useLogin();

  return (
    <Div100vh style={loginProfileStyles}>
      <FormControl>
        <LoginForm disabled={loading} onSubmit={onSubmit} />
      </FormControl>
    </Div100vh>
  );
};

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showErrorToast } = useErrorToast();
  const { showSuccessToast } = useSuccessToast();
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
        showSuccessToast("Inicio de sesión exitoso");
        dispatch(loginAction(result));
        navigate(`/dashboard`);
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [navigate, dispatch, showErrorToast, showSuccessToast]
  );

  return { onSubmit, loading };
}

export default Login;
