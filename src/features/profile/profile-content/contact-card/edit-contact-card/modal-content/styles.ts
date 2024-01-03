const PRIMARY_DARKER = "#03652e";

export const FormTitleStyles = {
  color: "#000",
  fontFamily: "Inter",
  fontSize: { 
    xs: "14px", 
    sm: "16px" 
  },
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
};

export const boxContentStyles = {
  display: "flex",
  flexDirection: { 
    xs: "column", 
    sm: "row", 
    lg: "row", 
  },
  justifyContent: "space-between", 
};


export const descriptionStyles = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#444444",
  fontFamily: "Inter",
  wordWrap: "break-word",
  py: 2,
};

export const buttonStyle = {
  height: "100%",
  fontFamily: "Inter",
  borderRadius: "6px",
  background: "#007935",
  fontWeight: "700",
  color: "white",
  textTransform: "capitalize",
  fontSize: "16px",
  px: 3,
  my: 1,
  "&:hover": {
    backgroundColor: PRIMARY_DARKER,
  },
};
