import { Typography, Box, Button } from "@mui/material/";
import {
  SecondSectionStyles,
  useInsideSecondSectionStyles,
  SecondSectionFigureBoxStyles,
  useSecondSectionFigureStyles,
  SecondSectionFigureBackgroundStyles,
  useSecondSectionDownloadCVSectionStyles,
  useSecondSectionDownloadCVTypographyStyles,
  useSecondSectionDownloadCVTextStyles,
  useButtonStyles,
} from "./styles";

const SecondSection = () => {
  const InsideSecondSectionStyles = useInsideSecondSectionStyles();
  const SecondSectionFigureStyles = useSecondSectionFigureStyles();
  const SecondSectionDownloadCVSectionStyles =
    useSecondSectionDownloadCVSectionStyles();
  const SecondSectionDownloadCVTypographyStyles =
    useSecondSectionDownloadCVTypographyStyles();
  const SecondSectionDownloadCVTextStyles =
    useSecondSectionDownloadCVTextStyles();
  const buttonStyles = useButtonStyles();

  return (
    <Box sx={SecondSectionStyles}>
      <Box sx={InsideSecondSectionStyles}>
        
        <Box sx={SecondSectionDownloadCVSectionStyles}>
          <Typography sx={SecondSectionDownloadCVTypographyStyles}>
            ¡Explora los portafolios de los egresados!
          </Typography>
          <Typography sx={SecondSectionDownloadCVTextStyles}>
            ¡Usa nuestro poderoso motor de búsquedas, el cual te permitirá
            amplias opciones de exploración, búsqueda y filtrado para conseguir
            justo el talento y los perfiles que necesitas !
          </Typography>
          <Box>
            <Button sx={buttonStyles}>Explorar portafolios</Button>
          </Box>
        </Box>
        <Box sx={SecondSectionFigureBoxStyles}>
          <Box sx={SecondSectionFigureStyles}>
            <Box
              component="img"
              sx={SecondSectionFigureBackgroundStyles}
              alt="portfolio-cards"
              src="src\features\landing-page\fourth-section\images\cards.png"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
