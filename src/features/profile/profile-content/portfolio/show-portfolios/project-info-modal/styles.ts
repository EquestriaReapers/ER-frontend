const PRIMARY_DARKER = "#03652e";

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  height: { xs: "100%", sm: "auto" },
  width: { xs: "100%", sm: "90%", md: "60%", lg: "50%", xl: "50%" },
  borderRadius: "6px",
};

export const titleStyles = {
  fontSize: { xs: "20px", sm: "22px", md: "30px" },
  fontFamily: "inter",
  lineHeight: "normal",
  fontStyle: "normal",
  fontWeight: "700",
  pb: 2,
};

export const buttonStyle = {
  fontFamily: "inter",
  borderRadius: "5px",
  background: "#007935",
  fontWeight: "600",
  color: "white",
  textTransform: "capitalize",
  fontSize: "16px",
  padding: "10px 25px",
  "&:hover": {
    backgroundColor: PRIMARY_DARKER,
  },
};

export const textFieldStyleA = {
  marginBottom: "20px",
  width: "100%",
};

export const inlineStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: {
    xs: "wrap",
    md: "nowrap",
    lg: "nowrap",
  },
  justifyContent: "space-between",
  alignItems: "center",
};
