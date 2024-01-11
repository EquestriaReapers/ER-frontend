import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const useCardStyles = () => {
  const CardStyles = {
    width: { xs: "100%", sm: "100%", lg: "300px" },
    backgroundColor: "#FFFFFF",
    display: "grid",
    boxShadow:
      "0px 8px 8px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
    margin: { xs: "inherit", sm: "inherit", lg: "0 10px 0 10px" },
    minWidth: {
      xs: "100%",
      md: "230px",
    },
    maxWidth: {
      xs: "250px",
      md: "inherit",
    },
    p: {
      xs: 1,
      md: 2,
    },
  };

  return CardStyles;
};

export const CardFirstSection = {
  width: "100%",
};

export const CardFirstLine = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
    mt: 1,
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
  width: "100%",
  marginTop: 1,
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
  width: "100%",
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
