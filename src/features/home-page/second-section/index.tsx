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
import useGetProfiles from "./card/use-get-profiles";

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

  const profiles = useGetProfiles();
  return (
    <Box sx={SecondSectionStyles}>
      <Box sx={InsideSecondSectionStyles}>
        <Box sx={SecondSectionExploreSectionStyles}>
          <Typography sx={SecondSectionExploreTypographyStyles}>
            Explora nuestros <span style={GraduatesColor}>egresados</span>
          </Typography>

          <Box>
            <Box sx={CardSectionStyles}>
              {profiles &&
                profiles.slice(0, 3).map((profile) => (
                  <Box sx={CardSectionStyles}>
                    <Card profile={profile} />
                  </Box>
                ))}
            </Box>

            <Box sx={CardSectionStyles}>
              {profiles &&
                profiles.slice(2, 5).map((profile) => (
                  <Box sx={CardSectionStyles}>
                    <Card profile={profile} />
                  </Box>
                ))}
            </Box>
          </Box>
          <Box>
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
    </Box>
  );
};

export default SecondSection;
