import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { 
    useFourthSectionStyles,
    useInsideFourthSectionStyles,
    useInsideFourthSectionTextStyles,
    useFourthSectionTextStyles,
    useInsideFourthSectionTypographyStyles,
    EgresatesColor,
    FourthSectionButtonStyles,
} from "./FourthSectionStyles";


const FourthSection = () => {

    const FourthSectionStyles = useFourthSectionStyles();
    const InsideFourthSectionStyles = useInsideFourthSectionStyles();
    const InsideFourthSectionTextStyles = useInsideFourthSectionTextStyles();
    const InsideFourthSectionTypographyStyles = useInsideFourthSectionTypographyStyles();
    const FourthSectionTextStyles = useFourthSectionTextStyles();

    return (
        <Box sx={FourthSectionStyles}>
          <Box sx={InsideFourthSectionStyles}>
            <Box sx={InsideFourthSectionTextStyles}>
              <Typography sx={InsideFourthSectionTypographyStyles}>
                ¿Eres un <span style={EgresatesColor}>egresado</span>?
              </Typography>
              <Typography sx={FourthSectionTextStyles}>
                Si eres un egresado de la UCAB puedes unirte a nuestra 
                plataforma e incrementar tu visibilidad profesional en linea!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={FourthSectionButtonStyles}
                >
                  Unete
                </Button>
            </Box>
          </Box>
        </Box>        
    );
}

export default FourthSection;