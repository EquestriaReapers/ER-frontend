import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import { BUTTON_WIDTH } from "../../styles";

export const useCardStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const CardStyles = {
    width: "40%",
    height: "200px",
    backgroundColor: "#FFFFFF",
    display: "grid",
    boxShadow:
      "0px 8px 12px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
    margin: isLargeScreen ? "auto" : "inherit",
    minWidth: "230px",
    p: 1, 
  };


  return CardStyles;
};

export const InsideCardStyles = {
  width: "calc(100% - 14px)",
  height: "calc(100% - 14px)",
  margin: "auto",
  overflow:'hidden',
};

export const CardFirstSection = {
  height: "50%",
  width: "100%",
};

export const CardFirstLine = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: 'center',
};

export const useCardNameStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const CardNameStyles = {
    color: "#007934",
    fontWeight: "700",
    fontSize: isLargeScreen ? "20px" : "20px",
  };

  return CardNameStyles;
};

export const useCardOcupationStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const CardOcupationStyles = {
    color: "#000000",
    fontWeight: "700",
    mt:1,
    fontSize: isLargeScreen ? "14px" : "14px",
  };

  return CardOcupationStyles;
};

export const CardSecondLine = {
  display: "flex",
  justifyContent: "left",
  py: 1,
};

export const useCardLocationLineStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const CardLocationLineStyles = {
    color: "#303030",
    fontWeight: "700",
    fontSize: isLargeScreen ? "14px" : "14px",
  };

  return CardLocationLineStyles;
};

export const useCardLocationIconStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const CardLocationIconStyles = {
    color: "#303030",
    height: isLargeScreen ? "13px" : "18px",
  };

  return CardLocationIconStyles;
};

export const CardSecondSection = {
  height: "50%",
  width: "100%",
  marginTop: 1,
  overflow: 'hidden',

};

export const useCardLocationChipStyles = () => {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const CardLocationChipStyles = {
    borderRadius: "6px",
    marginRight: 1,
    marginTop: "auto",
    marginBottom: "0px",
    backgroundColor: "#A6D6A8",
    color: "#000000",
    height: "28px",
    fontSize: isLargeScreen ? "12px" : "12px",
  };

  return CardLocationChipStyles;
};

export const CardSecondSectionSecondLine = {
  marginTop: "9px",
};

export const SecondSectionButtonStyles = {
  color: "#FFFFFF",
  backgroundColor: "#007934",
  margin: "auto",
  width: BUTTON_WIDTH,
  minWidth: "230px",
  textTransform: "none",
  fontWeight: "500",

  "&&:hover": {
    backgroundColor: "#007934",
  },
};
export const skillTitleStyles = {
  fontFamily: "inter",
  fontWeight: "400",
  color: "#000",
  backgroundColor: "#A6D6A8",
  borderRadius: "6px",
};
