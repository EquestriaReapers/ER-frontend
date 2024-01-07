import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FunctionComponent, useState, useCallback } from "react";
import {
  ForgotPasswordContainerStyles,
  ForgotPasswordInsideContainerStyles,
  useCenterBoxStyles,
  InsideCenterBoxStyles,
  useRecoverPasswordTypographyStyles,
  useRecoverPasswordTextStyles,
  SuccesImageStyles,
  MainContentStyles,
  SearchBarBoxStyles,
  useEmailTypographyStyles,
  SearchBarTextFieldStyles,
  useSendEmailStyles,
} from "./styles/ForgotPaswordStyles";
import "../../styles/index.css";
import { ChangeEvent, FormEvent } from "react";
import forgotPassword from "core/auth/forgot-password.service";
import { useSuccessToast } from "hooks/use-success-toast";
import { useErrorToast } from "hooks/use-error-toast";
import forgotPasswordImage from "./images/forgot-password.png"

const ForgotPassword: FunctionComponent = () => {
  const CenterBoxStyles = useCenterBoxStyles();
  const RecoverPasswordTypographyStyles = useRecoverPasswordTypographyStyles();
  const RecoverPasswordTextStyles = useRecoverPasswordTextStyles();
  const EmailTypographyStyles = useEmailTypographyStyles();
  const SendEmailStyles = useSendEmailStyles();

  const [email, setEmail] = useState("");
  const [emailSent, setEmailSend] = useState(false);
  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLInputElement>) => {
      event.preventDefault();

      try {
        if (!email) return;
        const data = await forgotPassword(email);
        setEmailSend(true);
        showSuccessToast(
          "El correo con el método de recuperación ha sido enviado"
        );
        return data;
      } catch (error) {
        showErrorToast(error);
      }
    },
    [email, showErrorToast, showSuccessToast]
  );

  return (
    <Box
      sx={ForgotPasswordContainerStyles}
      component="form"
      onSubmit={onSubmitForm}
    >
      <Box sx={ForgotPasswordInsideContainerStyles}>
        <Box sx={CenterBoxStyles}>
          <Box sx={InsideCenterBoxStyles}>
            <Typography sx={RecoverPasswordTypographyStyles}>
              {emailSent ? "Revisa tu correo electronico!": "Recuperar contraseña"}
            </Typography>
            <Typography sx={RecoverPasswordTextStyles}>
              {emailSent ? 
                `Te hemos enviado un correo a ${email} para recuperar tu contraseña, revisalo y continua el proceso`: 
                "Ingresa tu correo para que puedas recibir un mensaje de recuperación de contraseña"
              }
            </Typography>
            {emailSent ? ( 
              <img src={forgotPasswordImage} style={SuccesImageStyles} /> 
              ) : ( 
                <Box sx={MainContentStyles}>
                  <Box sx={SearchBarBoxStyles}>
                  <Typography sx={EmailTypographyStyles}>
                    Correo Electrónico
                  </Typography>
                  <TextField
                    variant="outlined"
                    onChange={onEmailChange}
                    sx={SearchBarTextFieldStyles}
                  />
                  </Box>
                  <Button sx={SendEmailStyles} type="submit">
                    Enviar Email
                  </Button> 
                </Box>
              )}

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
