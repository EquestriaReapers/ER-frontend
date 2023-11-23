import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RegisterForm from "./register-form/RegisterForm";
import { FunctionComponent, useState, useCallback } from "react";
import registerService from "features/auth/services/register.service";

import useRedirectWhenRegistered from "./use-redirect-when-registered";

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

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (
      name: string,
      email: string,
      password: string,
      confirmPassword: string
    ) => {
      setLoading(true);
      try {
        if (!name || !email || !password || !confirmPassword) return;

        if (password === confirmPassword) {
          await registerService({
            name,
            email,
            password,
          });
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { onSubmit, loading };
}

export default Register;