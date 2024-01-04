import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import { ForgotPasswordContainerStyles, 
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

const ForgotPassword: FunctionComponent = () => {

    const CenterBoxStyles = useCenterBoxStyles();
    const RecoverPasswordTypographyStyles = useRecoverPasswordTypographyStyles();
    const RecoverPasswordTextStyles = useRecoverPasswordTextStyles();
    const EmailTypographyStyles = useEmailTypographyStyles();
    const ForgotEmailStyles  = useForgotEmailStyles ();
    const SendEmailStyles = useSendEmailStyles();

    return (
        <Box sx={ForgotPasswordContainerStyles}>
            <Box sx= {ForgotPasswordInsideContainerStyles}>
                <Box sx={CenterBoxStyles}>
                    <Box sx={InsideCenterBoxStyles}>
                        <Typography sx={RecoverPasswordTypographyStyles}>Recuperar contraseña</Typography>
                        <Typography sx={RecoverPasswordTextStyles}>
                            Ingresa tu correo para que puedas recibir un mensaje 
                            de recuperación de contraseña
                        </Typography>
                        <Box sx={SearchBarBoxStyles}>
                            <Typography sx={EmailTypographyStyles}>
                                Correo Electrónico
                            </Typography>
                            <TextField 
                                variant='outlined'
                                sx={SearchBarTextFieldStyles}
                            />
                            <Link sx={ForgotEmailStyles}>¿Olvidó su correo?</Link>
                        </Box>
                        <Button sx={SendEmailStyles}>Enviar Email</Button>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
};
  

export default ForgotPassword;