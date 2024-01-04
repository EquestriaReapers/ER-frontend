import background from "../images/background.jpeg";
import { useMediaQuery, useTheme } from "@mui/material";

const XS_SCREEN_LARGE_FONT_SIZE = "1.8rem";
const XS_SCREEN_MEDIUM_FONT_SIZE = "0.8rem";
const XS_SCREEN_SMALL_FONT_SIZE = "0.75rem";

const LG_SCREEN_LARGE_FONT_SIZE = "2rem";
const LG_SCREEN_MEDIUM_FONT_SIZE = "1rem";
const LG_SCREEN_SMALL_FONT_SIZE = "0.95rem";

export const NewPasswordContainerStyles = {
  width: "100%",
  height: "100%",
  minHeight: "650px",
  minWidth: "250px",
  display: "flex",
  alignItems: "center",
};

export const NewPasswordInsideContainerStyles = {
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-3.3px",
    left: "-3.3px",
    right: "-3.3px",
    bottom: "-3.3px",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(3.3px)",
    border: "3.3px solid black",
    overflow: "hidden",
    zIndex: -1,
  },
};

export const useCenterBoxStyles = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down(650));

  const CenterBoxStyles = {
    height: "600px",
    width: isSmallScreen ? "80%" : "600px",
    backgroundColor: "white",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    borderRadius: "6px",
  };

  return CenterBoxStyles;
};

export const InsideCenterBoxStyles = {
  width: "80%",
  height: "80%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
};

export const useRecoverPasswordTypographyStyles = () => {
  const theme = useTheme();

  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down(300));

  const RecoverPasswordTypographyStyles = {
    fontSize: isExtraSmallScreen
      ? XS_SCREEN_LARGE_FONT_SIZE
      : LG_SCREEN_LARGE_FONT_SIZE,
    fontWeight: "700",
    marginBottom: "30px",
    color: "#000000",
  };

  return RecoverPasswordTypographyStyles;
};

export const useRecoverPasswordTextStyles = () => {
  const theme = useTheme();

  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down(300));

  const RecoverPasswordTextStyles = {
    fontSize: isExtraSmallScreen
      ? XS_SCREEN_MEDIUM_FONT_SIZE
      : LG_SCREEN_MEDIUM_FONT_SIZE,
    color: "#575757",
  };

  return RecoverPasswordTextStyles;
};

export const SearchBarBoxStyles = {
  margin: "auto 0 auto 0",
};

export const useNewPasswordTypographyStyles = () => {
  const theme = useTheme();

  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down(300));

  const NewPasswordTypographyStyles = {
    fontSize: isExtraSmallScreen
      ? XS_SCREEN_MEDIUM_FONT_SIZE
      : LG_SCREEN_MEDIUM_FONT_SIZE,
    marginBottom: "4px",
    color: "#979899",
  };

  return NewPasswordTypographyStyles;
};

export const SearchBarTextFieldStyles = {
  width: "100%",
  marginBottom: "15px",
};

export const useForgotEmailStyles = () => {
  const theme = useTheme();

  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down(300));

  const ForgotEmailStyles = {
    display: "grid",
    fontSize: isExtraSmallScreen
      ? XS_SCREEN_SMALL_FONT_SIZE
      : LG_SCREEN_SMALL_FONT_SIZE,
    color: "#007BFF",
  };
  return ForgotEmailStyles;
};

export const useConfirmPasswordStyles = () => {
  const theme = useTheme();

  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down(300));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(650));

  const ConfirmPasswordStyles = {
    margin: "0 auto 0 0",
    height: "45px",
    width: isSmallScreen ? "100%" : "35%",
    backgroundColor: "#007934",
    color: "#FFFFFF",
    fontSize: isExtraSmallScreen
      ? XS_SCREEN_MEDIUM_FONT_SIZE
      : LG_SCREEN_MEDIUM_FONT_SIZE,
    textTransform: "capitalize",
    borderRadius: "5px",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#007934",
      color: "#FFFFFF",
    },
  };
  return ConfirmPasswordStyles;
};
