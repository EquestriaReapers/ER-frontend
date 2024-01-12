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
import CatalogInPhoneAndPcImage from "./images/catalog-in-phone-and-pc.png";
import WideLogo from "./images/wide-logo.png";
import { useNavigate } from "react-router-dom";

const FirstSection = () => {
  const insideFirstSectionStyles = useInsideFirstSectionStyles();
  const firstSectionFigureStyles = useFirstSectionFigureStyles();
  const firstSectionDownloadCVSectionStyles =
    useFirstSectionDownloadCVSectionStyles();
  const firstSectionDownloadCVTypographyStyles =
    useFirstSectionDownloadCVTypographyStyles();

  const buttonStyles = useButtonStyles();

  const navigate = useNavigate();

  return (
    <Box sx={firstSectionStyles}>
      <Box sx={insideFirstSectionStyles}>
        <Box sx={firstSectionFigureBoxStyles}>
          <Box sx={firstSectionFigureStyles}>
            <Box
              component="img"
              sx={firstSectionFigureBackgroundStyles}
              alt="catalog-in-pc"
              src={CatalogInPhoneAndPcImage}
            />
          </Box>
        </Box>
        <Box sx={firstSectionDownloadCVSectionStyles}>
          <Box
            component="img"
            sx={firstSectionLogoStyles}
            alt="catalog-in-pc"
            src={WideLogo}
          />
          <Typography sx={firstSectionDownloadCVTypographyStyles}>
            ¡La red con los perfiles profesionales de egresados de la UCAB!
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button sx={buttonStyles} onClick={() => navigate("/home")}>
              Empezar a Explorar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
