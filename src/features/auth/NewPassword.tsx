import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
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

const NewPassword: FunctionComponent = () => {
  const CenterBoxStyles = useCenterBoxStyles();
  const RecoverPasswordTypographyStyles = useRecoverPasswordTypographyStyles();
  const RecoverPasswordTextStyles = useRecoverPasswordTextStyles();
  const NewPasswordTypographyStyles = useNewPasswordTypographyStyles();
  const ConfirmPasswordStyles = useConfirmPasswordStyles();

  return (
    <Box sx={NewPasswordContainerStyles}>
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
                variant="outlined"
                sx={{ ...SearchBarTextFieldStyles, marginBottom: "30px" }}
              />
              <Typography sx={NewPasswordTypographyStyles}>
                Confirmar contraseña
              </Typography>
              <TextField variant="outlined" sx={SearchBarTextFieldStyles} />
            </Box>
            <Button sx={ConfirmPasswordStyles}>Confirmar</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewPassword;
