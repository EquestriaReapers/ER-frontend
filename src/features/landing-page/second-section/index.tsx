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
import Pc2Imagen from "./images/pc2.png";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
  return (
    <Box sx={SecondSectionStyles}>
      <Box sx={InsideSecondSectionStyles}>
        <Box sx={SecondSectionDownloadCVSectionStyles}>
          <Typography sx={SecondSectionDownloadCVTypographyStyles}>
            ¡Encuentra los perfiles que te interesan!
          </Typography>
          <Typography sx={SecondSectionDownloadCVTextStyles}>
            ¡Usa nuestro poderoso motor de búsquedas, el cual te permitirá
            amplias opciones de exploración, búsqueda y filtrado para conseguir
            justo el talento y los perfiles que necesitas !
          </Typography>
          <Box>
            <Button sx={buttonStyles} onClick={() => navigate("/catalogue")}>
              Empieza a Buscar
            </Button>
          </Box>
        </Box>
        <Box sx={SecondSectionFigureBoxStyles}>
          <Box sx={SecondSectionFigureStyles}>
            <Box
              component="img"
              sx={SecondSectionFigureBackgroundStyles}
              alt="catalog-in-pc"
              src={Pc2Imagen}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
