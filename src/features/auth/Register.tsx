import FormControl from "@mui/material/FormControl";
import RegisterForm from "./register-form/RegisterForm";
import { FunctionComponent, useState, useCallback } from "react";
import registerService from "core/auth/register.service";
import useRedirectWhenRegistered from "./use-redirect-when-registered";
import Div100vh from "react-div-100vh";
import { registerProfileStyles } from "./styles/RegisterStyles";
import "styles/index.css";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";

const Register: FunctionComponent = () => {
  const { loading, onSubmit } = useRegister();

  return (
    <Div100vh style={registerProfileStyles}>
      <FormControl margin="normal">
        <RegisterForm disabled={loading} onSubmit={onSubmit} />
      </FormControl>
    </Div100vh>
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
        if (!name || !lastname || !email || !password || !confirmPassword) {
          showErrorToast("Todos los campos son obligatorios.");
          return;
        }

        if (password !== confirmPassword) {
          showErrorToast("La contraseñas no son iguales");
          return;
        }

        await registerService({
          name,
          lastname,
          email,
          password,
        });
        showSuccessToast("Registro exitoso");
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
