import Box from "@mui/material/Box";
import {
  useLandingPageContainerStyles,
  useMainContainerStyles,
} from "./styles";

import FirstSection from "./first-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";

const LandingPage = () => {

  const LandingPageStyles = useLandingPageContainerStyles();
  const MainContainerStyles = useMainContainerStyles();

  return (
    <Box sx={LandingPageStyles}>
      <Box sx={MainContainerStyles}>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      </Box>
    </Box>
  );
};

export default LandingPage;
