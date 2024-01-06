import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { FunctionComponent, useState, useCallback } from "react";
import {
  ForgotPasswordContainerStyles,
  ForgotPasswordInsideContainerStyles,
  useCenterBoxStyles,
  InsideCenterBoxStyles,
  useRecoverPasswordTypographyStyles,
  useRecoverPasswordTextStyles,
  SearchBarBoxStyles,
  useEmailTypographyStyles,
  SearchBarTextFieldStyles,
  useForgotEmailStyles,
  useSendEmailStyles,
} from "./styles/ForgotPaswordStyles";
import "../../styles/index.css";
import { ChangeEvent, FormEvent } from "react";
import forgotPassword from "core/auth/forgot-password.service";
import { useSuccessToast } from "hooks/use-success-toast";
import { useErrorToast } from "hooks/use-error-toast";

const ForgotPassword: FunctionComponent = () => {
  const CenterBoxStyles = useCenterBoxStyles();
  const RecoverPasswordTypographyStyles = useRecoverPasswordTypographyStyles();
  const RecoverPasswordTextStyles = useRecoverPasswordTextStyles();
  const EmailTypographyStyles = useEmailTypographyStyles();
  const ForgotEmailStyles = useForgotEmailStyles();
  const SendEmailStyles = useSendEmailStyles();

  const [email, setEmail] = useState("");
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const onSubmitForm = useCallback( async (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    
    try {
      console.log(email);
      const data = await forgotPassword(email);
      showSuccessToast("El correo con el método de recuperación ha sido enviado");
      console.log(data);
      return data;
    } catch (error) {
      showErrorToast(error);
    }
  }, [])

  return (
    <Box sx={ForgotPasswordContainerStyles} component="form" onSubmit={onSubmitForm}>
      <Box sx={ForgotPasswordInsideContainerStyles}>
        <Box sx={CenterBoxStyles}>
          <Box sx={InsideCenterBoxStyles}>
            <Typography sx={RecoverPasswordTypographyStyles}>
              Recuperar contraseña
            </Typography>
            <Typography sx={RecoverPasswordTextStyles}>
              Ingresa tu correo para que puedas recibir un mensaje de
              recuperación de contraseña
            </Typography>
            <Box sx={SearchBarBoxStyles}>
              <Typography sx={EmailTypographyStyles}>
                Correo Electrónico
              </Typography>
              <TextField 
                variant="outlined" 
                onChange={onEmailChange} 
                sx={SearchBarTextFieldStyles} 
              />
              <Link sx={ForgotEmailStyles}>¿Olvidó su correo?</Link>
            </Box>
            <Button sx={SendEmailStyles} type="submit">Enviar Email</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
