import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const SecondSectionStyles = {
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

    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(3.3px)",
    zIndex: -1,
    display: "flex",
  },
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

export const SecondSectionFigureBoxStyles = {
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  margin: "auto",
};

export const useSecondSectionFigureStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionFigureStyles = {
    height: isSmallScreen ? "310px" : "300px",
    width: isSmallScreen ? "270px" : "100%",
  };
  return SecondSectionFigureStyles;
};

export const SecondSectionFigureBackgroundStyles = {
  height: 233,
  width: 350,
  maxHeight: { xs: 233, md: 167 },
  maxWidth: { xs: 350, md: 250 },
};

export const useSecondSectionDownloadCVSectionStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVSectionStyles = {
    width: isSmallScreen ? "100%" : "50%",
    height: "40%",
    margin: isSmallScreen ? "auto" : "auto 0 60px 0",
  };

  return SecondSectionDownloadCVSectionStyles;
};

export const useSecondSectionDownloadCVTypographyStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVTypographyStyles = {
    fontWeight: "600",
    fontSize: "2rem",
    marginBottom: "40px",
    color: "#FFFFFF",
    textAlign: isSmallScreen ? "center" : "left",
  };

  return SecondSectionDownloadCVTypographyStyles;
};

export const useSecondSectionDownloadCVTextStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVTextStyles = {
    marginBottom: "40px",
    fontWeight: "500",
    fontSize: "0.9rem",
    color: "#FFFFFF",
    textAlign: isSmallScreen ? "center" : "left",
  };

  return SecondSectionDownloadCVTextStyles;
};

export const useSecondSectionDownloadCVBoxStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: isSmallScreen ? "center" : "left",
  };

  return SecondSectionDownloadCVBoxStyles;
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
