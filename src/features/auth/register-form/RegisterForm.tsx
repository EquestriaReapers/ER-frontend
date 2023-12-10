import { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useRegisterFormState from "./use-register-form-state";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ucabLogo from "../images/ucabLogo.webp";
import "../../../styles/index.css";
import {
  TextFieldTypography,
  ImageBoxStyles,
  TextFieldStyles,
  ButtonStyles,
  UcabLogoStyles,
} from "./RegisterFormStyles.tsx";

const RegisterForm: FunctionComponent<props> = ({ disabled, onSubmit }) => {
  const {
    name,
    lastname,
    email,
    password,
    confirmPassword,
    onChangeName,
    onChangeLastname,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
  } = useRegisterFormState();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const FormBoxStyles = {

    width: isSmallScreen ? "250px" : "350px",
    height: "680px",
    margin: "auto",
    padding: isSmallScreen ? "18px" : "40px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItemns: "center",
    justifyContent: "center",
    borderRadius: "8px",
    marginBottom: "16px",
  };

  const LOGIN_BORDER_RADIUS = '11px';

  return (
    <>
      <Box sx={FormBoxStyles}>
        <Box sx={ImageBoxStyles}>
          <img src={ucabLogo} alt="UCAB Logo" style={UcabLogoStyles} />
        </Box>
        <Typography sx={TextFieldTypography}>Nombre</Typography>
        <TextField
          value={name}
          label=""
          type="name"
          onChange={onChangeName}
          disabled={disabled}
          sx={TextFieldStyles}
          InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
        />
        <Typography sx={TextFieldTypography}>Apellido</Typography>
        <TextField
          value={lastname}
          label=""
          type="lastname"
          onChange={onChangeLastname}
          disabled={disabled}
          sx={TextFieldStyles}
          InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
        />
        <Typography sx={TextFieldTypography}>Correo electronico</Typography>
        <TextField
          value={email}
          label=""
          type="email"
          onChange={onChangeEmail}
          disabled={disabled}
          sx={TextFieldStyles}
          InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
        />
        <Typography sx={TextFieldTypography}>Contraseña</Typography>
        <TextField
          value={password}
          label=""
          type="password"
          onChange={onChangePassword}
          disabled={disabled}
          sx={TextFieldStyles}
          InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
        />
        <Typography sx={TextFieldTypography}>Confirmar contraseña</Typography>
        <TextField
          value={confirmPassword}
          label=""
          type="password"
          onChange={onChangeConfirmPassword}
          disabled={disabled}
          sx={{ ...TextFieldStyles, marginBottom: "26px" }}
          InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={disabled}
          onClick={() => {
            onSubmit(name, lastname, email, password, confirmPassword);
          }}
          sx={ButtonStyles}
        >
          Registrarse
        </Button>
      </Box>
    </>
  );
};

export interface props {
  disabled: boolean;
  onSubmit: (
    name: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
}

export default RegisterForm;