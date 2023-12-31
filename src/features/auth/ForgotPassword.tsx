import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import background from "./images/background.jpeg";
import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import { useMediaQuery, useTheme } from "@mui/material";


const ForgotPassword: FunctionComponent = () => {

    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("md"));

    return (
        <Box sx={{width: '100vw', height: '100vh', display:'flex', alignItems:'center'}}>
            <Box sx= {{
                width: '100%', 
                height:'100%', 
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
        
                '&::before': {
                content: '""',
                position:'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(3.3px)',
                zIndex: -1,
                }
            }}>
                <Box sx={{height: '600px', width: isSmallScreen ? '80%' :'600px', backgroundColor:'white', margin: 'auto', display:'flex', alignItems:'center'}}>
                    <Box sx={{width:'80%', height: '80%', margin: 'auto', display: 'flex', flexDirection:'column'}}>
                        <Typography sx={{fontSize: '2rem', fontWeight:'700', marginBottom: '30px'}}>Recuperar contraseña</Typography>
                        <Typography sx={{marginBottom: '90px'}}>
                            Ingresa tu correo para que puedas recibir un mensaje 
                            de recuperación de contraseña
                        </Typography>
                        <Typography>
                            Correo Electrónico
                        </Typography>
                        <TextField 
                            variant='outlined'
                            sx={{width:'100%', marginBottom:'15px'}}
                        />
                        <Link sx={{display:'grid'}}>¿Olvidó su correo?</Link>
                        <Button sx={{margin:'auto auto 0 auto', width:'60%', backgroundColor:'#D9D9D9', color:'#303030'}}>Enviar Email</Button>
                    </Box>
                </Box>
            </Box>

        </Box>

    );
  };
  

export default ForgotPassword;