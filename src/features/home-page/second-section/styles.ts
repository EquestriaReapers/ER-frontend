import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import { BUTTON_WIDTH } from "../styles";

export const useSecondSectionStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const SecondSectionStyles = {
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
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
    width: isMediumScreen ? "90%" : "80%",
    height: "90%",
    display: isSmallScreen ? "grid" : "flex",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    maxWidth: "2000px",
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
    margin: isSmallScreen ? "auto" : "auto 0 60px 0",
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
    fontSize: isSmallScreen ? "18px" : isLargeScreen ? "28px" : "32px",
    textAlign: "center",
    marginBottom: 11,
    color:'black',
    mt:4,
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
    justifyContent: isLargeScreen ? "normal" : "space-evenly",
    width: "100%",
    marginBottom: "15px",
  };

  return CardSectionStyles;
};

export const SecondSectionButtonStyles = {
  color: "#FFFFFF",
  backgroundColor: "#007934",
  my: 5,
  width: BUTTON_WIDTH,
  minWidth: "230px",
  textTransform: "none",
  fontWeight: "500",

  "&&:hover": {
    backgroundColor: "#007934",
  },
};
