import { Typography, Box, Button } from "@mui/material/";
import {
  firstSectionStyles,
  useInsideFirstSectionStyles,
  firstSectionFigureBoxStyles,
  useFirstSectionFigureStyles,
  useFirstSectionDownloadCVSectionStyles,
  useFirstSectionDownloadCVTypographyStyles,
  useButtonStyles,
  thirdSectionCurriculumStyles,
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
              sx={thirdSectionCurriculumStyles}
              alt="catalog-in-pc"
              src="src\features\landing-page\third-section\images\curriculum.png"
            />
          </Box>
        </Box>
        <Box sx={firstSectionDownloadCVSectionStyles}>
          <Typography sx={firstSectionDownloadCVTypographyStyles}>
            ¡Genera un currículum profesional en segundos!
          </Typography>
          <Typography sx={{ color: "pink" }}>
            ¡Resume toda la información académica, habilidades, experiencias e
            idiomas en tan solo segundos descargando el currículum vitae de un
            perfil totalmente actualizado!
          </Typography>
          <Box sx={{display:"grid", justifyContent:"center"}}>
            <Button sx={buttonStyles}>Empezar a Generar</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
