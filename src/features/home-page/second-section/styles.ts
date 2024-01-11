import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import { BUTTON_WIDTH } from "../styles";

export const useSecondSectionStyles = () => {
  const SecondSectionStyles = {
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    mt: {
      xs: 6,
      md: 12,
    },
  };

  return SecondSectionStyles;
};

export const useInsideSecondSectionStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const InsideSecondSectionStyles = {
    width: isMediumScreen ? "90%" : "100%",
    maxWidth: "1200px",
    display: isSmallScreen ? "grid" : "flex",
    margin: "auto",
    zIndex: 1,
  };

  return InsideSecondSectionStyles;
};

export const useSecondSectionExploreSectionStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionExploreSectionStyles = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: isSmallScreen ? "auto" : "0px 0 30px 0",
  };

  return SecondSectionExploreSectionStyles;
};

export const useSecondSectionExploreTypographyStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const SecondSectionExploreTypographyStyles = {
    fontWeight: "600",
    fontSize: isSmallScreen ? "22px" : isLargeScreen ? "28px" : "32px",
    textAlign: "center",
    marginBottom: { xs: 5, sm: 5, lg: 5 },
    color: "black",
  };
  return SecondSectionExploreTypographyStyles;
};

export const SecondSectionExploreTypographyStyles = {
  fontWeight: "600",
  fontSize: "24px",
  marginBottom: "40px",
  color: "black",
  textAlign: "center",
};

export const GraduatesColor = {
  color: "#007934",
};

export const useCardSectionStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const CardSectionStyles = {
    display: isLargeScreen ? "grid" : "flex",
    flexDirection: "row",
    justifyContent: isLargeScreen ? "space-evenly" : "center",
    width: "100%",
    marginBottom: "15px",
  };

  return CardSectionStyles;
};

export const SecondSectionButtonStyles = {
  color: "#FFFFFF",
  background: "#007935",
  mt: 5,
  width: BUTTON_WIDTH,
  minWidth: "230px",
  textTransform: "none",
  fontWeight: "500",
  fontSize: { xs: "16px", sm: "18px", lg: "18px" },

  "&&:hover": {
    backgroundColor: "#03652e",
  },
};
