import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import { FunctionComponent } from "react";
import useLoginFormState from "./use-login-form-state";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';
import ucabLogo from "../images/ucabLogo.webp";
import "../../../styles/index.css";
import { TextFieldTypography, 
  UcabLogoStyles, 
  ImageBoxStyles,
  FormBottomTypographyStyles,
  TextFieldStyles, 
  ButtonStyles,
  CheckBoxStyles,

} from "./LoginFormStyles.tsx";

const LoginForm: FunctionComponent<Props> = ({ disabled, onSubmit }) => {
  const { email, password, onChangeEmail, onChangePassword } =
    useLoginFormState();
  
    const [keepLogged, setKeepLogged] = useState(false);


    

    const handleKeepLoggedChange = () => {
      setKeepLogged(!keepLogged); 
    };

    const LOGIN_BORDER_RADIUS = '11px';
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


    const FormBottomStyles = {
      marginBottom:'36px', 
      height: '50px',
      display: isSmallScreen ? 'grid' : 'flex',
      justifyContent:'center', 
      aligItems: 'center',
    }

    const InsideFormBottomStyles = {
      width: isSmallScreen ? '100%' : '50%',
      display:'flex',
      justifyContent:'center', 
      alignItems:'center'
    }

    const ForgotPaswordStyles = { 
      fontFamily: 'Inter, sans-serif', 
      width: isSmallScreen ? '90%' : '50%',
      margin: 'auto',
      display:'inline-block',
      fontSize: '0.9rem',
    }
  

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
            InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
          />
          <Typography sx={TextFieldTypography}>Contraseña</Typography>
          <TextField
            value={password}
            label=""
            type="password"
            onChange={onChangePassword}
            disabled={disabled}
            sx={{ ...TextFieldStyles, marginBottom: '26px' }}
            InputProps={{ sx: { borderRadius: LOGIN_BORDER_RADIUS } }}
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
            <Box sx={InsideFormBottomStyles}>
            <Checkbox
              checked={keepLogged}
              onChange={handleKeepLoggedChange}
              inputProps={{ 'aria-label': 'Checkbox' }}
              sx={CheckBoxStyles}
            />
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
    </>
  );
};

export interface Props {
  disabled: boolean;
  onSubmit: (email: string, password: string) => void;
}

export default LoginForm;
