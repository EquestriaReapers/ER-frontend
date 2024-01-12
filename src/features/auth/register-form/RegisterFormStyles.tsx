import { useMediaQuery, useTheme } from "@mui/material";

export const useFormBoxStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const FormBoxStyles = {
    width: isSmallScreen ? "300px" : "350px",
    height: "500px",
    margin: "auto",
    padding: isSmallScreen ? "18px" : "40px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItemns: "center",
    justifyContent: "center",
    borderRadius: "6px",
    mb: "16px",
  };

  return FormBoxStyles;
};

export const useQuestionBoxStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const QuestionBoxStyles = {
    marginRight: isSmallScreen ? "3px" : "6px",
    fontSize: isSmallScreen ? "16px" : "14px",
    fontFamily: "Inter, sans-serif",
  };

  return QuestionBoxStyles;
};

export const useLinkBoxStylesFunct = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const LinkBoxStyles = {
    marginLeft: isSmallScreen ? "3px" : "3px",
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

export const ImageBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const WelcomeToUCABTypography = {
  fontSize:"24px", 
  fontWeight:"600", 
  textAlign:"center"
}

export const WelcomeTOUCABSpan = {
  color:"#007935"
}

export const SentEmailTypography = {
  fontSize:"13px", 
  marginTop:"5px"
}

export const SentEmailImageBoxStyles = {
  height:"45%", 
  width:"100%", 
  display:"grid"
}

export const SentEmailImageStyles = {
  width: "65%", 
  height:"auto", 
  margin:"auto"
}

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
  boxShadow: "none",
  backgroundColor: "#03652e",
  width: "100%",
  color: "white",
  marginBottom: "26px",
  borderRadius: "6px",
  minHeight: "50px",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: "500",
};

export const UcabLogoStyles = {
  height: "140px",
  width: "140px",
  marginBottom: "26px",
};
