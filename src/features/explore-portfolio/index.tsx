import Box from "@mui/material/Box";
import {
  useLandingPageContainerStyles,
  useMainContainerStyles,
} from "./styles";

const ExplorePortfolio = () => {
  const LandingPageStyles = useLandingPageContainerStyles();
  const MainContainerStyles = useMainContainerStyles();

  return (
    <Box sx={LandingPageStyles}>
      <Box sx={MainContainerStyles}></Box>
    </Box>
  );
};

export default ExplorePortfolio;
