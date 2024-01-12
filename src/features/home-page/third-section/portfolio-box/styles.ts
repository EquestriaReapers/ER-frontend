import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import { BUTTON_WIDTH } from "../../styles";

export const usePortfoliosBoxStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );
  const isNotLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const PortfoliosBoxStyles = {
    height: isLargeScreen ? "220px" : "220px",
    width: isNotLargeScreen ? "50%" : "210px",
    backgroundColor: "white",
    margin: isNotLargeScreen ? "auto" : "inherit",
    mb: { xs: "20px", sm: "20px", lg: "0" },
    pb: 3,
    minWidth: isSmallScreen ? "250px" : isNotLargeScreen ? "335px" : "210px",
    borderRadius: "6px",
    boxShadow: "0 0 0 rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return PortfoliosBoxStyles;
};

export const PortfolioBackground = {
  backgroundColor: "#D9D9D9",
  width: "100%",
  height: "80%",
  borderRadius: "6px 6px 0 0",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export const usePortfoliosTitleStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const PortfoliosTitleStyles = {
    fontWeight: "700",
    fontSize: isLargeScreen ? "16px" : "14px",
    py: 1,
    pl: 1,
  };

  return PortfoliosTitleStyles;
};

export const PortfolioSecondLineStyles = {
  display: "flex",
  justifyContent: "space-between",
};

export const PortfolioNameStyles = {
  color: "#353535",
  fontSize: "14px",
  pl: 1,
};

export const PortfolioInsideSecondLine = {
  display: "flex",
  alignItems: "center",
};

export const PortfolioViewsNumber = {
  marginRight: "5px",
  color: "#353535",
  fontSize: "14px",
  pr: 1,
};

export const PortfolioViewsNumberIcon = {
  color: "#353535",
  height: "20px",
  pr: 1,
};

export const ThirdSectionButtonStyles = {
  color: "#FFFFFF",
  backgroundColor: "#FCC430",
  width: BUTTON_WIDTH,
  minWidth: "230px",
  textTransform: "none",
  fontWeight: "500",
  "&&:hover": {
    backgroundColor: "#FCC430",
  },
};
