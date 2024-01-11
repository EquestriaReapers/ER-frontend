import { Typography, Box, Button } from "@mui/material/";
import {
  firstSectionStyles,
  useInsideFirstSectionStyles,
  firstSectionFigureBoxStyles,
  useFirstSectionFigureStyles,
  firstSectionFigureBackgroundStyles,
  useFirstSectionDownloadCVSectionStyles,
  useFirstSectionDownloadCVTypographyStyles,
  useButtonStyles,
  firstSectionLogoStyles,
} from "./styles";

const FirstSection = () => {
  const insideFirstSectionStyles = useInsideFirstSectionStyles();
  const firstSectionFigureStyles = useFirstSectionFigureStyles();
  const firstSectionDownloadCVSectionStyles =
    useFirstSectionDownloadCVSectionStyles();
  const firstSectionDownloadCVTypographyStyles =
    useFirstSectionDownloadCVTypographyStyles();

  const buttonStyles = useButtonStyles();

  return (
    <Box sx={firstSectionStyles}>
      <Box sx={insideFirstSectionStyles}>
        <Box sx={firstSectionFigureBoxStyles}>
          <Box sx={firstSectionFigureStyles}>
            <Box
              component="img"
              sx={firstSectionFigureBackgroundStyles}
              alt="catalog-in-pc"
              src="src\features\landing-page\first-section\images\catalog- in-phone-and-pc.png"
            />
            <Box
              component="img"
              sx={firstSectionLogoStyles}
              alt="catalog-in-pc"
              src="src\features\landing-page\first-section\images\wide-logo.png"
            />
          </Box>
        </Box>
        <Box sx={firstSectionDownloadCVSectionStyles}>
          <Typography sx={firstSectionDownloadCVTypographyStyles}>
            ¡La red con los perfiles profesionales de egresados de la UCAB!
          </Typography>

          <Box>
            <Button sx={buttonStyles}>Empezar a Explorar</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
