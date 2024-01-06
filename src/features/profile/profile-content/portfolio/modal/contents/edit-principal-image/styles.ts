const PRIMARY_DARKER = "#03652e";

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  paddingTop: {
    xs: 2,
    sm: 3,
    md: 2,
  },
  paddingBottom: {
    xs: 2,
    sm: 3,
    md: 4,
  },
  px: {
    xs: 2,
    sm: 3,
    md: 4,
  },
  borderRadius: "6px",
  height: { xs: "100%", sm: "auto" },
  width: { xs: "100%", sm: "50%", md: "30%" },
};

export const titleStyles = {
  margin: "0px 0px 12px",
  fontSize: { xs: "20px", sm: "22px", md: "30px" },
  fontFamily: "Inter",
  lineHeight: "normal",
  fontStyle: "normal",
  fontWeight: "700",
};

export const descriptionStyles = {
  color: "#575757",
  fontSize: "16px",
  fontFamily: "inter",
  lineHeight: "normal",
  fontStyle: "normal",
  fontWeight: "400",
  mb: "30px",
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

export const textFieldStyles = {
  width: "100%",
  display: "flex",
  fontFamily: "Inter",
};

export const boxButtonStyles = {
  display: "flex",
  justifyContent: "center",
};

export const inputLabelStyles = {
  color: "#000",
  fontFamily: "inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  textTransform: "none",
  mx: { xs: "20px", sm: "0" },
};

export const uploadBoxStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "10px",
  mx: { xs: "20px", sm: "0" },
};

export const inputBoxStyles = {
  display: "flex",
  flexDirection: "column",
  border: "2px dashed #ccc",
  borderRadius: "8px",
  textAlign: "center",
  alignItems: "center",
};

export const fileListBoxStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};

export const fileNameStyles = {
  color: "#000",
  fontFamily: "inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textTransform: "none",
};

export const uploadButtonStyles = {
  ":hover": { backgroundColor: "#fff" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "25px",
  paddingBottom: "50px",
  width: "100%",
  gap: "14px",
};

export const inputDescriptionStyles = {
  color: "#000",
  textAlign: "center",
  fontFamily: "inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textTransform: "none",
};
