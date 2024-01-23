import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const FooterStyles = {
  width: "100%",
  backgroundColor: "#CDCDCD",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const FooterLineStyles = {
  width: "100%",
  height: "8px",
  backgroundColor: "#37B4E3",
};

export const InsideFooterStyles = {
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const useFooterFirstLineStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const FooterFirstLineStyles = {
    marginBottom: "30px",
    width: isSmallScreen ? "270px" : "380px",
    display: "flex",
    flexDirection: isSmallScreen ? "column" : "row",
    alignItems: "center",
    gap: "10px",
    justifyContent: "space-between",
    fontSize: "16px",
  };

  return FooterFirstLineStyles;
};

export const FooterTextStyles = {
  color: "#343434",
  textDecoration: "none",
  "&:hover": {
    color: "#050505",
    fontWeight: "500",
  },
};

export const FooterSecondLine = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "no-wrap",
  gap: "20px",
  mb: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
  },
};

export const FooterIconStyles = {
  color: "#343434",
  "&:hover": {
    color: "#050505",
  },
};

export const FooterThirdLine = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "no-wrap",
  gap: "20px",
  mb: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
  },
};
