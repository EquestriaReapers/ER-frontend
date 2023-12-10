import FormControl from "@mui/material/FormControl";
import RegisterForm from "./register-form/RegisterForm";
import { FunctionComponent, useState, useCallback } from "react";
import registerService from "features/auth/services/register.service";

import useRedirectWhenRegistered from "./use-redirect-when-registered";
import Div100vh from 'react-div-100vh';
import { registerProfileStyles } from "./styles/RegisterStyles";
import "../../styles/index.css";

const Register: FunctionComponent = () => {
  const { loading, onSubmit } = useRegister();

  return (
    <Div100vh style={ 
      registerProfileStyles
    }>
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
        if (!name || !lastname || !email || !password || !confirmPassword) {
          alert("Todos los campos son obligatorios.");
          return;
        }

        if (password === confirmPassword) {
          await registerService({
            name,
            email,
            password,
          });
        } else {
          alert("Las contraseñas no coinciden.");      
          return;
        }
      } catch (error) {
        console.log(error);
        alert("El registro ha fallado.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { onSubmit, loading };
}

export default Register;
