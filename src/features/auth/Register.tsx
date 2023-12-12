import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RegisterForm from "./register-form/RegisterForm";
import { FunctionComponent, useState, useCallback } from "react";
import registerService from "features/auth/services/register.service";
import useRedirectWhenRegistered from "./use-redirect-when-registered";
import { useSuccessToast } from "hooks/use-success-toast";
import { useErrorToast } from "hooks/use-error-toast";

const Register: FunctionComponent = () => {
  const { loading, onSubmit } = useRegister();
  return (
    <Box>
      <Typography>Register</Typography>
      <FormControl margin="normal">
        <RegisterForm disabled={loading} onSubmit={onSubmit} />
      </FormControl>
    </Box>
  );
};

function useRegister() {
  useRedirectWhenRegistered();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async ({
      name,
      lastname,
      email,
      password,
      confirmPassword,
    }: RegisterPayload) => {
      setLoading(true);
      try {
        if (!name || !lastname || !email || !password || !confirmPassword)
          return;

        if (password != confirmPassword)
          showErrorToast("La contraseñas no son iguales");
        if (password === confirmPassword) {
          await registerService({
            name,
            lastname,
            email,
            password,
          });
          showSuccessToast("Registro exitoso");
        }
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [showErrorToast, showSuccessToast]
  );

  return { onSubmit, loading };
}

export interface RegisterPayload {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default Register;
