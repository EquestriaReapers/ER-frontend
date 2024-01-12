import { Box } from "@mui/material";
import "../../styles/index.css";
import { useHomePageContainerStyles, useMainContainerStyles } from "./styles";
import FirstSection from "./first-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";

const HomePage = () => {
  const HomePageStyles = useHomePageContainerStyles();
  const MainContainerStyles = useMainContainerStyles();

  return (
    <Box sx={HomePageStyles}>
      <Box sx={MainContainerStyles}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </Box>
    </Box>
  );
};

export default HomePage;
