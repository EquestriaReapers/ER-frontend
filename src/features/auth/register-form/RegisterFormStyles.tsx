import { useMediaQuery, useTheme } from "@mui/material";

export const useFormBoxStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const FormBoxStyles = {
    width: isSmallScreen ? "250px" : "350px",
    height: "680px",
    margin: "auto",
    padding: isSmallScreen ? "18px" : "40px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItemns: "center",
    justifyContent: "center",
    borderRadius: "6px",
    marginBottom: "16px",
  };

  return FormBoxStyles;
};

export const useQuestionBoxStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const QuestionBoxStyles = {
    marginRight: isSmallScreen ? "3px" : "15px",
    fontSize: isSmallScreen ? "0.9rem" : "1rem",
    fontFamily: "Inter, sans-serif",
  };

  return QuestionBoxStyles;
};

export const useLinkBoxStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const LinkBoxStyles = {
    marginLeft: isSmallScreen ? "3px" : "15px",
    fontSize: isSmallScreen ? "0.9rem" : "1rem",
    fontFamily: "Inter, sans-serif",
  };

  return LinkBoxStyles;
};

export const RedirectBoxStyles = {
  display: "flex",
  justifyContent: "center",
  fontFamily: "Inter, sans-serif",
};

export const TextFieldTypography = {
  fontFamily: "Inter, sans-serif",
  color: "#979899",
  fontSize: "0.9rem",
};

export const ImageBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const TextFieldStyles = {
  width: "100%",
  marginBottom: "16px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#979899",
    //padding: '13px',
    height: "56px",
  },
};

export const ButtonStyles = {
  backgroundColor: "#37B4E3",
  width: "100%",
  color: "white",
  marginBottom: "26px",
  borderRadius: "6px",
  minHeight: "50px",
  textTransform: "capitalize",
  fontSize: "0.rem",
};

export const UcabLogoStyles = {
  height: "85px",
  width: "85px",
  marginBottom: "16px",
};
