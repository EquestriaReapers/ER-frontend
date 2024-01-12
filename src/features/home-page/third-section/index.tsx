import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  useThirdSectionStyles,
  useInsideThirdSectionStyles,
  InsideThirdSectionTextStyles,
  InsideThirdSectionBoxTextStyles,
  useInsideThirdSectionTypographytStyles,
  PortfoliosColor,
  usePortfoliosSectionStyles,
  ThirdSectionButtonStyles,
} from "./styles";
import PortfolioBox from "./portfolio-box";
import { useNavigate } from "react-router-dom";

const ThirdSection = () => {
  const ThirdSectionStyles = useThirdSectionStyles();
  const InsideThirdSectionStyles = useInsideThirdSectionStyles();
  const InsideThirdSectionTypographytStyles =
    useInsideThirdSectionTypographytStyles();
  const PortfoliosSectionStyles = usePortfoliosSectionStyles();

  const navigate = useNavigate();

  const navigateToCatalogue = () => {
    navigate("/catalogue");
  };

  return (
    <Box sx={ThirdSectionStyles}>
      <Box sx={InsideThirdSectionStyles}>
        <Box sx={InsideThirdSectionTextStyles}>
          <Box sx={InsideThirdSectionBoxTextStyles}>
            <Typography sx={InsideThirdSectionTypographytStyles}>
              Explora nuestros <span style={PortfoliosColor}>portafolios</span>
            </Typography>
          </Box>
        </Box>
        <Box sx={PortfoliosSectionStyles}>
          <PortfolioBox />
          <PortfolioBox />
          <PortfolioBox />
          <PortfolioBox />
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={ThirdSectionButtonStyles}
          onClick={navigateToCatalogue}
        >
          Ver más portafolios
        </Button>
      </Box>
    </Box>
  );
};

export default ThirdSection;
