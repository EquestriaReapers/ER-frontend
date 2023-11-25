import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";
import { toast } from "sonner";
import { FunctionComponent, useCallback, useState } from "react";
import loginService from "features/auth/services/login.service";
import { useDispatch } from "react-redux";
import { login as loginAction } from "features/auth/store/auth-slice";
import useRedirectWhenLogged from "../../hooks/use-redirect-when-logged";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form/LoginForm";
import { BackendError } from "app/exceptions";

const Login: FunctionComponent = () => {
  const { loading, onSubmit } = useLogin();

  return (
    <Box>
      <Typography>Login</Typography>
      <FormControl margin="normal">
        <LoginForm disabled={loading} onSubmit={onSubmit} />
      </FormControl>
    </Box>
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
        toast.success("Inicio de sesión exitoso");
        navigate(`/dashboard`);
      } catch (error) {
        if (error instanceof BackendError) {
          toast.error(error.message);
        } else {
          toast.error("Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    },
    [navigate, dispatch]
  );

  return { onSubmit, loading };
}

export default Login;
