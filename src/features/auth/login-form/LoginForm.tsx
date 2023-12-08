import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import useLoginFormState from "./use-login-form-state";
import { Typography } from "@mui/material";
import Check from "../Check/CheckKeepLogged.tsx";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';
import ucabLogo from "../images/ucabLogo.webp";
import "./LoginForm.css";
import { TextFieldTypography, 
  UcabLogoStyles, 
  ImageBoxStyles,
  FormBottomStyles,
  FormBottonStyles1,
  FormBottomTypographyStyles,
  ForgotPaswordStyles,
  UnderFormStyles,
  TextFieldStyles, 
  ButtonStyles

} from "./styles/LoginFormStyles.tsx";

const LoginForm: FunctionComponent<Props> = ({ disabled, onSubmit }) => {
  const { email, password, onChangeEmail, onChangePassword } =
    useLoginFormState();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const FormBoxStyles = {
        width: isSmallScreen ? '85%' : '350px',
        height: '480px',
        margin: 'auto', 
        padding: isSmallScreen ? '18px' : '40px',
        backgroundColor:'white',
        display: 'flex',
        flexDirection:'column',
        alignItemns:'center',
        justifyContent:'center',
        borderRadius:'8px',
        marginBottom:'16px',
    };

  return (
    <>

      <Box sx={FormBoxStyles}>
        <Box sx={ImageBoxStyles}>
          <img src={ucabLogo} alt="UCAB Logo" style={UcabLogoStyles} />
        </Box>
        <Box>
          <Typography sx={TextFieldTypography}>Correo electronico</Typography>
          <TextField
            value={email}
            label=""
            type="email"
            onChange={onChangeEmail}
            disabled={disabled}
            sx={TextFieldStyles}
            InputProps={{ sx: { borderRadius: '11px' } }}
          />
          <Typography sx={TextFieldTypography}>Contraseña</Typography>
          <TextField
            value={password}
            label=""
            type="password"
            onChange={onChangePassword}
            disabled={disabled}
            sx={{ ...TextFieldStyles, marginBottom: '26px' }}
            InputProps={{ sx: { borderRadius: '11px' } }}
          />
          <Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={disabled}
              onClick={() => {
                onSubmit(email, password);
              }}
              sx={ButtonStyles}
            >
              Iniciar Sesión
            </Button>
          </Box>
          <Box sx={FormBottomStyles}>
            <Box sx={FormBottonStyles1}>
              <Check/> 
              <Typography sx={FormBottomTypographyStyles}>Permanecer conectado</Typography>
            </Box>
            <Box sx={ForgotPaswordStyles}>
              <Link href="#" rel="noopener noreferrer">
                ¿Olvidó la contraseña?
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={UnderFormStyles}> 
          <Box sx={{display:'inline-block',}}>¿Aún no tienes cuenta?</Box>   &nbsp;  &nbsp;  &nbsp;
          <Box sx={{display:'inline-block', color:'#007BFF'}}><Link href='/register/'>Registrate aquí</Link></Box>  
      </Box>
    </>
  );
};

export interface Props {
  disabled: boolean;
  onSubmit: (email: string, password: string) => void;
}

export default LoginForm;
