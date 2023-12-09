const PRIMARY_DARKER = "#03652e";

export const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export const titleStyles = {
  fontWeight: "800",
  fontSize: "28px",
  margin: "0px 0px 12px",
};

export const buttonStyle = {
  borderRadius: "6px",
  background: "#007935",
  fontWeight: "500",
  color: "white",
  textTransform: "capitalize",
  fontSize: "16px",
  my: 1,
  "&:hover": {
    backgroundColor: PRIMARY_DARKER,
  },
};
