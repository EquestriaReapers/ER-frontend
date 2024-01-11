import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  useFourthSectionStyles,
  useInsideFourthSectionStyles,
  useInsideFourthSectionTextStyles,
  useFourthSectionTextStyles,
  useInsideFourthSectionTypographyStyles,
  GraduatesColor,
  FourthSectionButtonStyles,
} from "./styles";
import { useNavigate } from "react-router-dom";

const FourthSection = () => {
  const FourthSectionStyles = useFourthSectionStyles();
  const InsideFourthSectionStyles = useInsideFourthSectionStyles();
  const InsideFourthSectionTextStyles = useInsideFourthSectionTextStyles();
  const InsideFourthSectionTypographyStyles =
    useInsideFourthSectionTypographyStyles();
  const FourthSectionTextStyles = useFourthSectionTextStyles();

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <Box sx={FourthSectionStyles}>
      <Box sx={InsideFourthSectionStyles}>
        <Box sx={InsideFourthSectionTextStyles}>
          <Typography sx={InsideFourthSectionTypographyStyles}>
            ¿Eres un <span style={GraduatesColor}>egresado</span>?
          </Typography>
          <Typography sx={FourthSectionTextStyles}>
            Si eres un egresado de la UCAB puedes unirte a nuestra plataforma e
            incrementar tu visibilidad profesional en línea!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={FourthSectionButtonStyles}
            onClick={navigateToRegister}
          >
            Únete
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FourthSection;
