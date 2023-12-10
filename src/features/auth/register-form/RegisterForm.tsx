import { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useRegisterFormState from "./use-register-form-state";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ucabLogo from "../images/ucabLogo.webp";
import Link from "@mui/material/Link";
import {
  TextFieldTypography,
  ImageBoxStyles,
  TextFieldStyles,
  ButtonStyles,
  UnderFormStyles,
  UcabLogoStyles,
} from "./styles/RegisterFormStyles.tsx";

const RegisterForm: FunctionComponent<Props> = ({ disabled, onSubmit }) => {
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
    width: isSmallScreen ? "85%" : "350px",
    height: "550px",
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
          InputProps={{ sx: { borderRadius: "11px" } }}
        />
        <TextField
          value={lastname}
          label=""
          type="lastname"
          onChange={onChangeLastname}
          disabled={disabled}
          sx={TextFieldStyles}
          InputProps={{ sx: { borderRadius: "11px" } }}
        />
        <Typography sx={TextFieldTypography}>Correo electronico</Typography>
        <TextField
          value={email}
          label=""
          type="email"
          onChange={onChangeEmail}
          disabled={disabled}
          sx={TextFieldStyles}
          InputProps={{ sx: { borderRadius: "11px" } }}
        />
        <Typography sx={TextFieldTypography}>Contraseña</Typography>
        <TextField
          value={password}
          label=""
          type="password"
          onChange={onChangePassword}
          disabled={disabled}
          sx={TextFieldStyles}
          InputProps={{ sx: { borderRadius: "11px" } }}
        />
        <Typography sx={TextFieldTypography}>Confirmar contraseña</Typography>
        <TextField
          value={confirmPassword}
          label=""
          type="password"
          onChange={onChangeConfirmPassword}
          disabled={disabled}
          sx={{ ...TextFieldStyles, marginBottom: "26px" }}
          InputProps={{ sx: { borderRadius: "11px" } }}
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
        <Box sx={UnderFormStyles}>
          <Box sx={{ display: "inline-block" }}>¿Ya tienes cuenta?</Box> &nbsp;
          &nbsp; &nbsp;
          <Box sx={{ display: "inline-block", color: "#007BFF" }}>
            <Link href="/login/">Inicie sesion aquí</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export interface Props {
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
