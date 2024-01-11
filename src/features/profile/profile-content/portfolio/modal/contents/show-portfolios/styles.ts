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
  width: { xs: "95%", sm: "80%", md: "60%", lg: "50%" },
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
  padding: { xs: "8px 15px", md: "4px 18px" },
  "&:hover": {
    backgroundColor: PRIMARY_DARKER,
  },
};

export const inlineStyles = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  flexWrap: { xs: "wrap", sm: "nowrap" },
};
