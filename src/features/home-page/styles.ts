import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const BUTTON_WIDTH = "30%";

export const useHomePageContainerStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const HomePageStyles = {
    minWidth: isSmallScreen ? "280px" : isMediumScreen ? "600px" : "900px",
    width: "100%",
  };

  return HomePageStyles;
};

export const useMainContainerStyles = () => {
  const MainContainerStyles = {
    width: "100%",
  };

  return MainContainerStyles;
};
