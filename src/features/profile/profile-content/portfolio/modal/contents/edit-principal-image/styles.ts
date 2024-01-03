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

export const headerStyles = {
  py: 2,
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

export const descriptionStyles = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#444444",
  fontFamily: "Inter",
  wordWrap: "break-word",
};
