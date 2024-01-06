import Box from "@mui/material/Box";
import "../../styles/index.css";
import {
  useHomePageContainerStyles,
  useMainContainerStyles,
} from "./LandingPageStyles";
import FirstSection from "./first-section/FirstSection";
import SecondSection from "./second-section/SecondSection";
import ThirdSection from "./third-section/ThirdSection";
import FourthSection from "./fourth-section/FourthSection";
import Footer from "components/footer/Footer";

const LandingPage = () => {

  const HomePageStyles = useHomePageContainerStyles();
  const MainContainerStyles = useMainContainerStyles();

  return (
    <Box sx={HomePageStyles}>
      <Box sx={MainContainerStyles}>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      </Box>
      <Footer/>
    </Box>
  );
};

export default LandingPage;