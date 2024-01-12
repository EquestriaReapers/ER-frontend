import background from "../images/background.jpeg";

import { useMediaQuery, useTheme } from "@mui/material";

const mediaQueryStyles = {
    "@media (minWidth: 600px)": {
      minHeight: "500px",
    },
    "@media (minWidth: 900px)": {
      minHeight: "600px",
    },
  };

export const registerSuccessStyles = {
    width: "100%",
    height: "100%",
    minHeight: "650px",
    minWidth: "250px",
    display: "flex",
    alignItems: "center",
    ...mediaQueryStyles,
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
  };

  return FormBoxStyles;
};

export const ImageBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const ConfirmedEmailTypography = {
  fontSize:"24px", 
  fontWeight:"600", 
  textAlign:"center"
};

export const ConfirmedEmailRedirectTypography = {
  fontSize:"13px", 
  marginTop:"5px",
  marginBottom:"20px"
}

export const SentEmailImageBoxStyles = {
  height:"45%", 
  width:"100%", 
  display:"grid"
}

export const RegisterSuccessImageStyles = {
  width: "50%", 
  height:"auto", 
  margin:"auto"
}


export const UcabLogoStyles = {
  height: "85px",
  width: "85px",
  marginBottom: "32px",
};
