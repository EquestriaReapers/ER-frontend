import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const SecondSectionStyles = {
  width: "100%",
  position: "relative",
  height: { xs: "600px", md: "400px" },
  display: { xs: "grid", md: "flex" },

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
    //display: "flex",
  },
};

export const useInsideSecondSectionStyles = () => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const InsideSecondSectionStyles = {
    width: isMediumScreen ? "90%" : "80%",
    height: "90%",
    display: isMediumScreen ? "grid" : "flex",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    maxWidth: "2000px",
  };

  return InsideSecondSectionStyles;
};

export const SecondSectionFigureBoxStyles = {
  width: { xs: "100%", md: "50%" },
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
    display: "grid",
    margin: "auto",
  };
  return SecondSectionFigureStyles;
};

export const SecondSectionFigureBackgroundStyles = {
  //height: 233,
  //width: 350,
  //maxHeight: { xs: 233, md: 167 },
  //maxWidth: { xs: 350, md: 250 },
  maxWidth: { xs: 250, md: "100%" },
  height: "auto",
  width: 400,
  margin: "auto",
};

export const useSecondSectionDownloadCVSectionStyles = () => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const SecondSectionDownloadCVSectionStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: isMediumScreen ? "100%" : "50%",
    height: "100%",
    margin: isMediumScreen ? "auto" : "auto",
  };

  return SecondSectionDownloadCVSectionStyles;
};

export const useSecondSectionDownloadCVTypographyStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVTypographyStyles = {
    fontWeight: "600",
    fontSize: { xs: "1.5rem", md: "2rem" },
    marginBottom: "20px",
    color: "black",
    textAlign: isSmallScreen ? "center" : "left",
  };

  return SecondSectionDownloadCVTypographyStyles;
};

export const useSecondSectionDownloadCVTextStyles = () => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const SecondSectionDownloadCVTextStyles = {
    marginBottom: "20px",
    fontWeight: "500",
    fontSize: "0.9rem",
    color: "black",
    textAlign: isMediumScreen ? "center" : "left",
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
  color: "black",
};

export const DownlodCVTypography = {
  marginBottom: "40px",
  fontSize: "0.8rem",
  fontWeight: "500",
  color: "black",
  margin: "auto 0 0 0",
};

export const useButtonStyles = () => {
  const buttonStyles = {
    fontFamily: "inter",
    borderRadius: "6px",
    background: "#37B4E3",
    fontWeight: "700",
    color: "white",
    textTransform: "capitalize",
    fontSize: "16px",
    px: 3,
    my: 2,
    "&:hover": {
      backgroundColor: "#0b9bd1",
    },
    "&:disabled": {
      color: "#ffffff",
    },
  };

  return buttonStyles;
};
