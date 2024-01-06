import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  useSecondSectionStyles,
  useInsideSecondSectionStyles,
  useSecondSectionExploreSectionStyles,
  useSecondSectionExploreTypographyStyles,
  GraduatesColor,
  useCardSectionStyles,
  SecondSectionButtonStyles,
} from "./styles";
import Card from "./card";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const SecondSectionStyles = useSecondSectionStyles();
  const InsideSecondSectionStyles = useInsideSecondSectionStyles();
  const SecondSectionExploreSectionStyles =
    useSecondSectionExploreSectionStyles();
  const SecondSectionExploreTypographyStyles =
    useSecondSectionExploreTypographyStyles();
  const CardSectionStyles = useCardSectionStyles();

  const navigate = useNavigate();

  const navigateToCatalogue = () => {
    navigate("/catalogue");
  };

  return (
    <Box sx={SecondSectionStyles}>
      <Box sx={InsideSecondSectionStyles}>
        <Box sx={SecondSectionExploreSectionStyles}>
          <Typography sx={SecondSectionExploreTypographyStyles}>
            Explora nuestros <span style={GraduatesColor}>egresados</span>
          </Typography>
          <Box sx={CardSectionStyles}>
            <Card />
            <Card />
            <Card />
          </Box>
          <Box sx={CardSectionStyles}>
            <Card />
            <Card />
            <Card />
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={SecondSectionButtonStyles}
            onClick={navigateToCatalogue}
          >
            Ver más egresados
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
