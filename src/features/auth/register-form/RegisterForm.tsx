import { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useRegisterFormState from "./use-register-form-state";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ucabLogo from "../images/ucabLogo.webp";
import {
  ImageBoxStyles,
  TextFieldStyles,
  ButtonStyles,
  UcabLogoStyles,
  WelcomeTOUCABSpan,
  WelcomeToUCABTypography,
  SentEmailTypography,
  SentEmailImageBoxStyles,
  SentEmailImageStyles,
  useFormBoxStylesFunct,
  RedirectBoxStyles,
  useQuestionBoxStylesFunct,
  useLinkBoxStylesFunct,
} from "./RegisterFormStyles.tsx";
import { RegisterPayload } from "../Register";
import registerImage from "../images/forgot-password.png";

const RegisterForm: FunctionComponent<Props> = ({ disabled, startedregister, onSubmit }) => {
  const {
    email,
    password,
    confirmPassword,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
  } = useRegisterFormState();

  const LOGIN_BORDER_RADIUS = "6px";

  const FormBoxStyles = useFormBoxStylesFunct();
  const QuestionBoxStyles = useQuestionBoxStylesFunct();
  const LinkBoxStyles = useLinkBoxStylesFunct();

  return (
    <>
      <Box sx={FormBoxStyles}>
        <Box sx={ImageBoxStyles}>
          <img src={ucabLogo} alt="UCAB Logo" style={UcabLogoStyles} />
        </Box>
        {startedregister ? (<Typography sx={WelcomeToUCABTypography}>¡Bienvenido a <span style={WelcomeTOUCABSpan}>UCAB Profile</span>! </Typography>) : 
        (<Box>
          <TextField
            value={email}
            label="Correo electrónico"
            type="email"
            onChange={onChangeEmail}
            disabled={disabled}
            sx={TextFieldStyles}
            InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
          />
          <TextField
            value={password}
            label="Contraseña"
            type="password"
            onChange={onChangePassword}
            disabled={disabled}
            sx={TextFieldStyles}
            InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
          />
          <TextField
            value={confirmPassword}
            label="Confirmar contraseña"
            type="password"
            onChange={onChangeConfirmPassword}
            disabled={disabled}
            sx={{ ...TextFieldStyles, marginBottom: "26px" }}
            InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
          />
        </Box>

        )}
        {startedregister ? (<Typography sx={SentEmailTypography}>{`Te hemos enviado un correo a ${email} para continuar con tu registro!`}</Typography>  ): (
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={disabled}
            onClick={() => {
              onSubmit({ email, password, confirmPassword });
            }}
          sx={ButtonStyles}
          >
            Registrarse
          </Button>
        )}

        {startedregister ? (
        <Box sx={SentEmailImageBoxStyles}><img src={registerImage} style={SentEmailImageStyles} /></Box>) : (
          <Box sx={RedirectBoxStyles}>
            <Typography sx={QuestionBoxStyles}>¿Ya tienes una cuenta?</Typography>
            <Link to="/login" style={LinkBoxStyles}>
              Inicia sesión
            </Link>
          </Box>

        )}

    

        
      </Box>
    </>
  );
};

export interface Props {
  disabled: boolean;
  startedregister: boolean;
  onSubmit: ({ email, password, confirmPassword }: RegisterPayload) => void;
}

export default RegisterForm;
