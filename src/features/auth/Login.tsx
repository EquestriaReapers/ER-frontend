import FormControl from "@mui/material/FormControl";
import { FunctionComponent, useCallback, useState } from "react";
import loginService from "features/auth/services/login.service";
import { useDispatch } from "react-redux";
import { login as loginAction } from "features/auth/store/auth-slice";
import useRedirectWhenLogged from "../../hooks/use-redirect-when-logged";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form/LoginForm";
import Div100vh from 'react-div-100vh';
import { div100LoginStyles } from "./styles/LoginStyles";

const Login: FunctionComponent = () => {
  const { loading, onSubmit } = useLogin();

  const mediaQueryStyles = {
    '@media (minWidth: 600px)': {
      minHeight: '500px',
    },
    '@media (minWidth: 900px)': {
      minHeight: '600px',
    },
  };

  return (
    <Div100vh style={{
      ...div100LoginStyles,
      mediaQueryStyles,
    }}>
      
        <FormControl>
          <LoginForm disabled={loading} onSubmit={onSubmit} />
        </FormControl>
    </Div100vh>
  );
};

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        dispatch(loginAction(result));
        navigate(`/dashboard`);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [navigate, dispatch]
  );

  return { onSubmit, loading };
}

export default Login;
