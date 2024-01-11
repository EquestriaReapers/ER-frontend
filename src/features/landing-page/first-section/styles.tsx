import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";
import background from "./images/ucab-guayana1.jpg";

const PRIMARY_DARKER = "#03652e";

export const firstSectionStyles = {
  width: "100%",
  height: "22%",
  position: "relative",

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
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const InsidefirstSectionStyles = {
    width: isMediumScreen ? "90%" : "80%",
    height: "90%",
    display: isSmallScreen ? "grid" : "flex",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    maxWidth: "2000px",
  };

  return InsidefirstSectionStyles;
};

export const firstSectionFigureBoxStyles = {
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  margin: "auto",
};

export const useFirstSectionFigureStyles = () => {
  const firstSectionFigureStyles = {};
  return firstSectionFigureStyles;
};

export const firstSectionFigureBackgroundStyles = {
  height: 233,
  width: 350,
  maxHeight: { xs: 233, md: 167 },
  maxWidth: { xs: 350, md: 250 },
};

export const firstSectionLogoStyles = {
  height: 75,
  width: 200,
  maxHeight: { xs: 233, md: 167 },
  maxWidth: { xs: 350, md: 250 },
};


export const useFirstSectionDownloadCVSectionStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const firstSectionDownloadCVSectionStyles = {
    width: isSmallScreen ? "100%" : "50%",
    height: "40%",
    margin: isSmallScreen ? "auto" : "auto 0 60px 0",
  };

  return firstSectionDownloadCVSectionStyles;
};

export const useFirstSectionDownloadCVTypographyStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const firstSectionDownloadCVTypographyStyles = {
    fontWeight: "600",
    fontSize: "2rem",
    marginBottom: "40px",
    color: "#FFFFFF",
    textAlign: isSmallScreen ? "center" : "left",
  };

  return firstSectionDownloadCVTypographyStyles;
};

export const useFirstSectionDownloadCVTextStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const firstSectionDownloadCVTextStyles = {
    marginBottom: "40px",
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
