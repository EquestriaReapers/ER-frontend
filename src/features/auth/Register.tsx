import FormControl from "@mui/material/FormControl";
import RegisterForm from "./register-form/RegisterForm";
import { FunctionComponent, useState, useCallback } from "react";
import registerService from "features/auth/services/register.service";

import useRedirectWhenRegistered from "./use-redirect-when-registered";
import Div100vh from 'react-div-100vh'

const Register: FunctionComponent = () => {
  const { loading, onSubmit } = useRegister();


  const mediaQueryStyles = {
    '@media (minWidth: 600px)': {
      minHeight: '500px',
    },
    '@media (minWidth: 900px)': {
      minHeight: '600px',
    },
  };

  return (
    <Div100vh style={ {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '800px',
      minWidth: '300px', ...mediaQueryStyles
    }}>
      <FormControl margin="normal">
        <RegisterForm disabled={loading} onSubmit={onSubmit} />
      </FormControl>
    </Div100vh>
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
