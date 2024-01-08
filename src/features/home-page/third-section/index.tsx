import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  useThirdSectionStyles,
  useInsideThirdSectionStyles,
  InsideThirdSectionTextStyles,
  InsideThirdSectionBoxTextStyles,
  useInsideThirdSectionTypographytStyles,
  
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
          <Box>
            <Box sx={InsideThirdSectionBoxTextStyles}>
              <Typography sx={InsideThirdSectionTypographytStyles}>
                Explora nuestros{" "}
                <Typography sx={{ color: "#FCC430" }}>portafolios</Typography>
              </Typography>
            </Box>
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
