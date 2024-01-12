import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material";

export const SecondSectionStyles = {
  width: "100%",
  position: "relative",
  mt: 8,
  mb: 3,

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",

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
    display: isSmallScreen ? "grid" : "flex",
    margin: "auto",
    gap: "80px",
    position: "relative",
    zIndex: 1,
    maxWidth: "2000px",
  };

  return InsideSecondSectionStyles;
};

export const SecondSectionFigureBoxStyles = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  marginTop: { xs: "20px", sm: "0px" },
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
  height: 300,
  width: 400,
  maxHeight: { xs: 233, md: 300 },
  maxWidth: { xs: 350, md: 400 },
};

export const useSecondSectionDownloadCVSectionStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVSectionStyles = {
    width: isSmallScreen ? "100%" : "50%",
    height: "40%",
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
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
    fontStyle: "normal",
    lineHeight: "normal",
    marginBottom: "40px",
    color: "black",
    textAlign: isSmallScreen ? "center" : "left",
    "& span": {
      color: "#FFC801",
    },
  };

  return SecondSectionDownloadCVTypographyStyles;
};

export const useSecondSectionDownloadCVTextStyles = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const SecondSectionDownloadCVTextStyles = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    marginBottom: "40px",
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
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: isSmallScreen ? "center" : "left",
  };

  return SecondSectionDownloadCVBoxStyles;
};

export const useButtonStyles = () => {
  const buttonStyles = {
    fontFamily: "inter",
    textAlign: "center",
    fontStyle: "normal",
    borderRadius: "6px",
    background: "#efb70e",
    fontWeight: "500",
    color: "white",
    width: "312px",
    height: "48px",
    textTransform: "capitalize",
    fontSize: "16px",
    px: 3,
    my: 2,
    "&:hover": {
      backgroundColor: "#e2ac08",
    },
    "&:disabled": {
      color: "#ffffff",
    },
  };

  return buttonStyles;
};
