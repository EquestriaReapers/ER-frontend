import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import background from "./images/ucab-guayana1.jpg";

const PRIMARY_DARKER = "#03652e";

export const firstSectionStyles = {
  width: "100%",
  height: { xs: 650, md: 400 },
  position: "relative",
  display: "grid",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(3.3px)",
    zIndex: -1,
    display: "flex",
  },
};

export const useInsideFirstSectionStyles = () => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const InsidefirstSectionStyles = {
    width: isMediumScreen ? "90%" : "80%",
    height: "90%",
    display: isMediumScreen ? "grid" : "flex",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    maxWidth: "2000px",
  };

  return InsidefirstSectionStyles;
};

export const firstSectionFigureBoxStyles = {
  width: { xs: "100%", md: "40%" },
  height: "100%",
  display: "flex",
  alignItems: "center",
  margin: "auto",
  order: { xs: 2, md: 1 },
};

export const useFirstSectionFigureStyles = () => {
  const firstSectionFigureStyles = {
    margin: "auto",
  };
  return firstSectionFigureStyles;
};

export const firstSectionFigureBackgroundStyles = {
  //height: 233,
  // width: 350,
  height: "auto",
  width: 350,
  //maxHeight: { xs: 233, md: 167 },
  //maxWidth: { xs: 350, md: 250 },
  maxHeight: { xs: 233, md: 250 },
  maxWidth: { xs: 250, md: "100%" },

  margin: "auto",
};

export const firstSectionLogoStyles = {
  height: 125,
  width: 200,
  maxHeight: { xs: 233, md: 167 },
  maxWidth: { xs: 350, md: 250 },
  margin: "auto",
};

export const useFirstSectionDownloadCVSectionStyles = () => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const firstSectionDownloadCVSectionStyles = {
    display: "grid",
    width: isMediumScreen ? "100%" : "60%",
    height: "100%",
    //margin: isSmallScreen ? "auto" : "auto 0 60px 0",
    order: { xs: 1, md: 2 },
  };

  return firstSectionDownloadCVSectionStyles;
};

export const useFirstSectionDownloadCVTypographyStyles = () => {
  const firstSectionDownloadCVTypographyStyles = {
    fontWeight: "600",
    fontSize: { xs: "1.5rem", md: "2rem" },
    marginBottom: "40px",
    color: "#FFFFFF",
    textAlign: "center",
    //textAlign: isSmallScreen ? "center" : "left",
  };

  return firstSectionDownloadCVTypographyStyles;
};

export const useFirstSectionDownloadCVTextStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const firstSectionDownloadCVTextStyles = {
    fontWeight: "500",
    fontSize: "0.9rem",
    color: "#FFFFFF",
    textAlign: isSmallScreen ? "center" : "left",
  };

  return firstSectionDownloadCVTextStyles;
};

export const useButtonStyles = () => {
  const buttonStyles = {
    fontFamily: "inter",
    borderRadius: "6px",
    background: "#007935",
    fontWeight: "700",
    color: "white",
    textTransform: "capitalize",
    fontSize: "16px",
    px: 3,
    my: 2,
    "&:hover": {
      backgroundColor: PRIMARY_DARKER,
    },
    "&:disabled": {
      color: "#ffffff",
    },
  };

  return buttonStyles;
};

export const DownloadIconStyles = {
  fontSize: "1.5rem",
  marginTop: "auto",
  marginBottom: "auto",
  marginRight: "2px",
  color: "#FFFFFF",
};

export const DownlodCVTypography = {
  marginBottom: "40px",
  fontSize: "0.8rem",
  fontWeight: "500",
  color: "#FFFFFF",
  margin: "auto 0 0 0",
};
