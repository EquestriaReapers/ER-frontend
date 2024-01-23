import { Box } from "@mui/material";
import {
  useLandingPageContainerStyles,
  useMainContainerStyles,
} from "./styles";

import FirstSection from "./first-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";

const LandingPage = () => {
  const LandingPageStyles = useLandingPageContainerStyles();
  const MainContainerStyles = useMainContainerStyles();

  return (
    <Box>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </Box>
  );
};

export default LandingPage;
