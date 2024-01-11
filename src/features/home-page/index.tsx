import Box from "@mui/material/Box";
import "../../styles/index.css";
import { useHomePageContainerStyles, useMainContainerStyles } from "./styles";
import FirstSection from "./first-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import Footer from "components/footer";

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
      <Footer />
    </Box>
  );
};

export default HomePage;
