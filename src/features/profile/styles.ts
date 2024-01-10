const PRIMARY_DARKER = "#03652e";

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: {
    xs: 2,
    sm: 3,
    md: 4,
  },
  borderRadius: "6px",
};

export const titleStyles = {
  fontSize: { xs: "20px", sm: "22px", md: "30px" },
  fontFamily: "inter",
  fontWeight: "700",
};

export const subTitleStyles = {
  fontSize: { xs: "16px", sm: "18px", md: "24px" },
  fontFamily: "inter",
  fontWeight: "500",
};

export const buttonStyle = {
  fontFamily: "inter",
  borderRadius: "6px",
  background: "#007935",
  fontWeight: "500",
  color: "white",
  textTransform: "capitalize",
  fontSize: "16px",
  width: { xs: "100%", sm: "200px" },
  px: 3,
  my: 1,
  "&:hover": {
    backgroundColor: PRIMARY_DARKER,
  },
};

export const textFieldStyles = {
  width: "100%",
  display: "flex",
};

export const boxButtonStyles = {
  display: "flex",

  justifyContent: {
    xs: "center",
    md: "flex-start",
  },
};

export const reverseBoxButtonStyles = {
  display: "flex",

  justifyContent: {
    xs: "center",
    lg: "flex-end",
  },
};

export const descriptionStyles = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#444444",
  fontFamily: "inter",
  wordWrap: "break-word",
  py: 2,
};

export const skillTitleStyle = {
  fontFamily: "inter",
  fontWeight: "700",
  fontSize: "16px",
  pb: 2,
};

export const skillSubtitleStyle = {
  color: "#575757",
  fontFamily: "Inter",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "-0.198px",
};
