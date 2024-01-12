import FormControl from "@mui/material/FormControl";
import RegisterForm from "./register-form/RegisterForm";
import { FunctionComponent, useState, useCallback } from "react";
import registerService from "core/auth/register.service";
import useRedirectWhenRegistered from "./use-redirect-when-registered";
import { registerProfileStyles } from "./styles/RegisterStyles";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { Box } from "@mui/material";
import SpinnerAbsolute from "components/spinner-absolute";

const Register: FunctionComponent = () => {
  const { loading, startedRegisterSuccesfully, onSubmit } = useRegister();

  return (
    <Box
      style={
        registerProfileStyles as unknown as Record<string, number | string>
      }
    >
      {loading && <SpinnerAbsolute />}
      <FormControl margin="normal">
        <RegisterForm
          disabled={loading}
          startedregister={startedRegisterSuccesfully}
          onSubmit={onSubmit}
        />
      </FormControl>
    </Box>
  );
};

function useRegister() {
  useRedirectWhenRegistered();
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();
  const [loading, setLoading] = useState(false);
  const [startedRegisterSuccesfully, setStartedRegisterSuccesfully] =
    useState(false);
  const onSubmit = useCallback(
    async ({ email, password, confirmPassword }: RegisterPayload) => {
      setLoading(true);
      try {
        if (!email || !password || !confirmPassword) {
          showErrorToast(getFieldsRandomErrorPhrase());
          return;
        }

        if (password !== confirmPassword) {
          showErrorToast(getPasswordRandomErrorPhrase());
          return;
        }

        await registerService({
          email,
          password,
        });
        showSuccessToast(getRandomWelcomePhrase());
        setStartedRegisterSuccesfully(true);
      } catch (error) {
        showErrorToast(error);
      } finally {
        setLoading(false);
      }
    },
    [showErrorToast, showSuccessToast]
  );

  return { onSubmit, startedRegisterSuccesfully, loading };
}

export interface RegisterPayload {
  email: string;
  password: string;
  confirmPassword: string;
}

function getRandomWelcomePhrase() {
  const phrases = [
    "¡Bienvenido a UCAB Profile 👋!",
    "¡Te haz registrado con exito 🥳!",
    "¡Un nuevo egresado en la comunidad 🎉!",
    "Logro desbloqueado: ¡Te registraste en UCAB Profile 🎮!",
    "Bienvenido a nuestra red de egresados 🌐",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function getFieldsRandomErrorPhrase() {
  const phrases = [
    "Recuerda debes introducir todos los campos 😬!",
    "Si no introduces todos los campos no podras registrarte 😣!",
    "Por favor introduce todos los campos 🙏!",
    "Por favor introduce todos los campos 😅!",
    "Oye!, no olvides introducir todos los campos 😖!",
    "No olvides todos los campos antes 😁!",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function getPasswordRandomErrorPhrase() {
  const phrases = [
    "¡Oye! las contraseñas no coinciden 😬",
    "¡Hey! introdujiste contraseñas diferentes 😅",
    "¡Oye! las contraseñas no son iguales 😣",
    "¡Hey! las contraseñas no coinciden 😖",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export default Register;
