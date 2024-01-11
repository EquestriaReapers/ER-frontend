import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { FunctionComponent, useState, useCallback } from "react";
import { useSuccessToast } from "hooks/use-success-toast";
import { ChangeEvent, FormEvent } from "react";
import { useErrorToast } from "hooks/use-error-toast";
import {
  NewPasswordContainerStyles,
  NewPasswordInsideContainerStyles,
  useCenterBoxStyles,
  InsideCenterBoxStyles,
  useRecoverPasswordTypographyStyles,
  useRecoverPasswordTextStyles,
  SearchBarBoxStyles,
  useNewPasswordTypographyStyles,
  SearchBarTextFieldStyles,
  useConfirmPasswordStyles,
} from "./styles/NewPasswordStyles";
import "../../styles/index.css";
import newPassword from "core/auth/reset-password.service";
import { useNavigate } from "react-router-dom";
import registerImage from "./images/forgot-password.png";

const NewPassword: FunctionComponent = () => {
  const CenterBoxStyles = useCenterBoxStyles();
  const RecoverPasswordTypographyStyles = useRecoverPasswordTypographyStyles();
  const RecoverPasswordTextStyles = useRecoverPasswordTextStyles();
  const NewPasswordTypographyStyles = useNewPasswordTypographyStyles();
  const ConfirmPasswordStyles = useConfirmPasswordStyles();

  const { showSuccessToast } = useSuccessToast();
  const { showErrorToast } = useErrorToast();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const {token} = useParams();

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLInputElement>) => {

      event.preventDefault();

      try {

        if (!token || !password || !confirmPassword) return;

        if (password != confirmPassword) {
          showErrorToast("Las contraseñas no coinciden");
          return;
        }

        await newPassword( password, token );
        showSuccessToast("La contraseña se ha restablecido con exito");
        navigate(`/login`);
      } catch (error) {
        showErrorToast(error);
      }
    },
    [password, confirmPassword, showErrorToast, showSuccessToast]
  );

  return (
    <Box 
      sx={NewPasswordContainerStyles} 
      component="form" 
      onSubmit={onSubmitForm}
    >
      <Box sx={NewPasswordInsideContainerStyles}>
        <Box sx={CenterBoxStyles}>
          <Box sx={InsideCenterBoxStyles}>
            <Typography sx={RecoverPasswordTypographyStyles}>
              Nueva contraseña
            </Typography>
            <Typography sx={RecoverPasswordTextStyles}>
              Ingrese su nueva contraseña
            </Typography>
            <Box sx={SearchBarBoxStyles}>
              <Typography sx={NewPasswordTypographyStyles}>
                Contraseña
              </Typography>
              <TextField
                name="password" 
                variant="outlined"
                sx={{ ...SearchBarTextFieldStyles, marginBottom: "30px" }}
                type="password"
                onChange={onPasswordChange}
              />
              <Typography sx={NewPasswordTypographyStyles}>
                Confirmar contraseña
              </Typography>
              <TextField 
                name="confirm-password"
                variant="outlined" 
                sx={SearchBarTextFieldStyles}
                onChange={onConfirmPasswordChange}
                type="password"
              />
            </Box>
            <Button sx={ConfirmPasswordStyles} type="submit">Confirmar</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewPassword;
