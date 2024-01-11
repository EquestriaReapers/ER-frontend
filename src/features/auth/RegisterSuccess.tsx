import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ucabLogo from "./images/ucabLogo.webp";
import {
  registerSuccessStyles,
  ImageBoxStyles,
  NewPasswordInsideContainerStyles,
  UcabLogoStyles,
  ConfirmedEmailTypography,
  ConfirmedEmailRedirectTypography,
  SentEmailImageBoxStyles,
  RegisterSuccessImageStyles,
  useFormBoxStylesFunct,
} from "./styles/RegisterSuccessStyles";
import RegisterSuccessImage from "./images/successfully-registered.gif";

const RegisterSuccess: FunctionComponent = () => {

    const FormBoxStyles = useFormBoxStylesFunct();

    return (
        <Box sx={registerSuccessStyles}>
          <Box sx={NewPasswordInsideContainerStyles}>
            <Box sx={FormBoxStyles}>
                <Box sx={ImageBoxStyles}>
                <img src={ucabLogo} alt="UCAB Logo" style={UcabLogoStyles} />
                </Box>
                <Typography sx={ConfirmedEmailTypography}>¡Correo confirmado con exito!</Typography>
                <Typography sx={ConfirmedEmailRedirectTypography}>Hemos confirmado tu correo de forma exitosa, dirigete al inicio de sesion par autenticarte</Typography>
                <Box sx={SentEmailImageBoxStyles}><img src={RegisterSuccessImage} style={RegisterSuccessImageStyles} /></Box>   
            </Box>
          </Box>
        </Box>
      );
}

export default RegisterSuccess;