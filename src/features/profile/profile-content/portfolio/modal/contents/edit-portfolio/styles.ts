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
  margin: "0px 0px 12px",
  fontSize: { xs: "20px", sm: "22px", md: "30px" },
  fontFamily: "Inter",
  lineHeight: "normal",
  fontStyle: "normal",
  fontWeight: "700",
};

export const buttonStyle = {
  fontFamily: "Inter",
  borderRadius: "6px",
  background: "#007935",
  fontWeight: "bold",
  color: "white",
  textTransform: "capitalize",
  fontSize: "16px",
  px: 3,
  my: 1,
  "&:hover": {
    backgroundColor: PRIMARY_DARKER,
  },
};

export const headerStyles = {
  py: 2,
};

export const textFieldStyles = {
  width: "100%",
  display: "flex",
  fontFamily: "Inter",
};

export const descriptionStyles = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#444444",
  fontFamily: "Inter",
  wordWrap: "break-word",
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
};

export const uploadBoxStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "10px",
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
