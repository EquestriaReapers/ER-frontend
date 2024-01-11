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

  const isLargeScreen = useMediaQuery((theme: Theme) =>
  theme.breakpoints.down("lg")
  );

  const HomePageStyles = {
    height: isLargeScreen ? "300vh" : "200vh",
    minHeight: isSmallScreen ? "4200px" : isLargeScreen ? "4390px" : "2400px",
    minWidth: isSmallScreen ? "280px" : isMediumScreen ? "600px" : "900px",
    width: "100%",
  };

  return HomePageStyles;
};

export const useMainContainerStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const isLargeScreen = useMediaQuery((theme: Theme) =>
  theme.breakpoints.down("lg")
  );

  const MainContainerStyles = {
    width: "100%",
    height: isLargeScreen ? "300vh" : "200vh",
    minHeight: isSmallScreen ? "4200px" : isLargeScreen ? "4390px" : "2400px",
  };

  return MainContainerStyles;
};
