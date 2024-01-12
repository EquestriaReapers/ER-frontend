import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  ThirdSectionStyles,
  useInsideThirdSectionStyles,
  useThirdSectionFiguresSectionStyles,
  useThirdSectionFirstFiguresSectionStyles,
  useThirdSectionFirstFigureTypographyStyles,
  ThirdSectionFirstFigureTextStyles,
  useThirdSectionSecondFiguresSectionStyles,
  useThirdSectionSecondFigureTypographyStyles,
  ThirdSectionSecondFigureTextStyles,
} from "./styles";

const ThirdSection = () => {
  const InsideThirdSectionStyles = useInsideThirdSectionStyles();
  const ThirdSectionFiguresSectionStyles =
    useThirdSectionFiguresSectionStyles();
  const ThirdSectionFirstFiguresSectionStyles =
    useThirdSectionFirstFiguresSectionStyles();
  const ThirdSectionFirstFigureTypographyStyles =
    useThirdSectionFirstFigureTypographyStyles();
  const ThirdSectionSecondFiguresSectionStyles =
    useThirdSectionSecondFiguresSectionStyles();
  useThirdSectionSecondFigureTypographyStyles();

  return (
    <Box sx={ThirdSectionStyles}>
      <Box sx={InsideThirdSectionStyles}>
        <Box sx={ThirdSectionFiguresSectionStyles}>
          <Box sx={ThirdSectionFirstFiguresSectionStyles}>
            <Typography sx={ThirdSectionFirstFigureTypographyStyles}>
              ¿Eres un egresado?
            </Typography>
            <Typography sx={ThirdSectionFirstFigureTextStyles}>
              Estamos comprometidos con brindar visibilidad e igualdad de
              oportunidades a los profesionales de la UCAB
            </Typography>
          </Box>
          <Box sx={ThirdSectionSecondFiguresSectionStyles}>
            <Typography sx={ThirdSectionFirstFigureTypographyStyles}>
              ¿Eres un reclutador o empresa?
            </Typography>
            <Typography sx={ThirdSectionSecondFigureTextStyles}>
              ¡Contamos con una red completa de egresados profesionales que
              cuenten con el sello de calidad ucabista!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdSection;
