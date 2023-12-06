import FormControl from "@mui/material/FormControl";
import { FunctionComponent, useCallback, useState } from "react";
import loginService from "features/auth/services/login.service";
import { useDispatch } from "react-redux";
import { login as loginAction } from "features/auth/store/auth-slice";
import useRedirectWhenLogged from "../../hooks/use-redirect-when-logged";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form/LoginForm";
import Div100vh from "react-div-100vh";
import { useErrorToast } from "../../hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";

const Login: FunctionComponent = () => {
  const { loading, onSubmit } = useLogin();

  const mediaQueryStyles = {
    "@media (minWidth: 600px)": {
      minHeight: "500px",
    },
    "@media (minWidth: 900px)": {
      minHeight: "600px",
    },
  };

  return (
    <Div100vh
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "800px",
        minWidth: "300px",
        ...mediaQueryStyles,
      }}
    >
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
        if (!email || !password) return;

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
