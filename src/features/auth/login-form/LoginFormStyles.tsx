import { useMediaQuery, useTheme } from "@mui/material";

export const useQuestionBoxStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const QuestionBoxStyles = {
    marginRight: isSmallScreen ? "3px" : "0px",
    fontSize: isSmallScreen ? "16px" : "14px",
    fontFamily: "Inter, sans-serif",
  };

  return QuestionBoxStyles;
};

export const useFormBoxStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const FormBoxStyles = {
    width: isSmallScreen ? "88%" : "350px",
    height: "500px",
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

export const useFormBottomStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const FormBottomStyles = {
    marginBottom: "20px",
    height: "50px",
    display: isSmallScreen ? "grid" : "flex",
    justifyContent: "center",
    aligItems: "center",
  };

  return FormBottomStyles;
};

export const useInsideFormBottomStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const InsideFormBottomStyles = {
    width: isSmallScreen ? "100%" : "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return InsideFormBottomStyles;
};

export const useForgotPasswordStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const ForgotPasswordStyles = {
    fontFamily: "Inter, sans-serif",
    width: isSmallScreen ? "90%" : "50%",
    margin: "auto",
    display: "inline-block",
    fontSize: "0.9rem",
    textAlign: "end",
  };

  return ForgotPasswordStyles;
};

export const useLinkBoxStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const LinkBoxStyles = {
    marginLeft: isSmallScreen ? "6px" : "3px",
    fontSize: isSmallScreen ? "16px" : "14px",
    fontFamily: "Inter, sans-serif",
  };

  return LinkBoxStyles;
};

export const RedirectBoxStyles = {
  display: "flex",
  justifyContent: "center",
  fontFamily: "Inter, sans-serif",
};

export const UcabLogoStyles = {
  height: "85px",
  width: "85px",
  marginBottom: "32px",
  
};

export const ImageBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const CheckBoxStyles = {
  padding: "0 5px 0 0;",
};

export const FormBottomTypographyStyles = {
  fontFamily: "Inter, sans-serif",
  fontSize: "14px",
  fontWeight: "500",
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
  boxShadow:'none',
  backgroundColor: "#03652e",
  width: "100%",
  color: "white",
  marginBottom: "22px",
  borderRadius: "6px",
  minHeight: "50px",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: "500",
};
