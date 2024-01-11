export const modalStyle = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  overflowY: "auto",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: {
    xs: 2,
    sm: 3,
    md: 4,
  },
  width: { xs: "80%", sm: "70%", md: "50%", lg: "40%", xl: "30%" },
  height: { xs: "90%", sm: "auto" },
  borderRadius: "6px",
};

export const nameStyles = {
  fontSize: "20px",
  fontFamily: "inter",
  lineHeight: "normal",
  fontStyle: "normal",
  fontWeight: "700",
};

export const descriptionStyles = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#444444",
  fontFamily: "inter",
  wordWrap: "break-word",
  pt: 2,
};
